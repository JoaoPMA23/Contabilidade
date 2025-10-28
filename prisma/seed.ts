import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { LeadStatusEnum, RoleEnum } from "@/types/prisma";
import type { LeadStatus } from "@/types/prisma";

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

  const adminHash = await hash(adminPassword, 12);

  await prisma.user.upsert({
    where: { username: "admin" },
    update: {
      passwordHash: adminHash,
      role: RoleEnum.ADMIN,
      email: "admin@contabilidade.test",
      name: "Administrador",
    },
    create: {
      username: "admin",
      name: "Administrador",
      email: "admin@contabilidade.test",
      passwordHash: adminHash,
      role: RoleEnum.ADMIN,
    },
  });

  const agentHash = await hash("Agent@123", 12);

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
          role: RoleEnum.AGENT,
        },
      })
    )
  );

  await prisma.lead.deleteMany();

  const statuses: LeadStatus[] = [
    LeadStatusEnum.LEAD,
    LeadStatusEnum.PROPOSTA,
    LeadStatusEnum.CONTRATO,
    LeadStatusEnum.CLIENTE,
  ];

  const now = Date.now();

  for (let index = 0; index < SAMPLE_LEAD_NAMES.length; index += 1) {
    const [companyName, contactName] = SAMPLE_LEAD_NAMES[index];
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
