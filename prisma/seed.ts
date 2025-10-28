import { PrismaClient, LeadStatus, Role } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const SAMPLE_LEAD_NAMES = [
  ["Tech Nova Ltda", "João Silva"],
  ["Alpha Serviços ME", "Maria Oliveira"],
  ["Blue Ocean Consultoria", "Pedro Santos"],
  ["Inova Varejo SA", "Ana Costa"],
  ["Fenix Logística", "Lucas Lima"],
  ["Atlas Engenharia", "Carla Souza"],
  ["Orion Saúde Integrada", "Rafael Moreira"],
  ["Nimbus Tecnologia", "Juliana Rocha"],
  ["Ponto Forte Contábil", "Eduardo Alves"],
  ["Solaris Energia", "Fernanda Ribeiro"],
];

async function main() {
  const adminPassword =
    process.env.SEED_ADMIN_PASSWORD ?? "Admin@123";

  const adminHash = await bcrypt.hash(adminPassword, 12);

  await prisma.user.upsert({
    where: { username: "admin" },
    update: {
      passwordHash: adminHash,
      role: Role.ADMIN,
      email: "admin@contabilidade.test",
      name: "Administrador",
    },
    create: {
      username: "admin",
      name: "Administrador",
      email: "admin@contabilidade.test",
      passwordHash: adminHash,
      role: Role.ADMIN,
    },
  });

  const agentHash = await bcrypt.hash("Agent@123", 12);

  const agents = await Promise.all(
    ["marina", "luiz"].map((username, index) =>
      prisma.user.upsert({
        where: { username },
        update: {
          passwordHash: agentHash,
        },
        create: {
          username,
          name: `Agente ${index + 1}`,
          email: `${username}@contabilidade.test`,
          passwordHash: agentHash,
          role: Role.AGENT,
        },
      })
    )
  );

  await prisma.lead.deleteMany();

  const statuses: LeadStatus[] = [
    LeadStatus.LEAD,
    LeadStatus.PROPOSTA,
    LeadStatus.CONTRATO,
    LeadStatus.CLIENTE,
  ];

  const now = Date.now();

  for (const [index, [companyName, contactName]] of SAMPLE_LEAD_NAMES.entries()) {
    const status = statuses[index % statuses.length];
    const owner = agents[index % agents.length];

    await prisma.lead.create({
      data: {
        companyName,
        contactName,
        email: `${contactName.toLowerCase().replace(/\s/g, ".")}@example.com`,
        phone: `+55 11 9${Math.floor(10000000 + Math.random() * 89999999)}`,
        subject: "Consultoria contábil",
        message:
          "Lead gerado automaticamente pelo seed para testes da área administrativa.",
        source: "seed",
        utm: "seed",
        status,
        ownerId: owner.id,
        createdAt: new Date(now - index * 1000 * 60 * 60 * 12),
      },
    });
  }

  console.log("Seed executada com sucesso.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
