import { test, expect, type Page } from "@playwright/test";

function captureConsole(page: Page) {
  const consoleMessages: string[] = [];
  page.on("console", (message) => {
    const entry = `[${message.type()}] ${message.text()}`;
    consoleMessages.push(entry);
    console.log(entry);
  });
  page.on("pageerror", (error) => {
    const entry = `[pageerror] ${error.message}`;
    consoleMessages.push(entry);
    console.log(entry);
  });
  return consoleMessages;
}

test("home hydrates without errors", async ({ page }) => {
  const consoleMessages = captureConsole(page);

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  const hydrationMessage = consoleMessages.find((message) =>
    message.includes("Hydration failed")
  );

  expect(hydrationMessage).toBeUndefined();
});

test("admin leads hydrates without errors after login", async ({ page }) => {
  const consoleMessages = captureConsole(page);

  await page.goto("http://localhost:3000/login", { waitUntil: "networkidle" });
  await page.waitForTimeout(5000);

  const loginHydrationMessage = consoleMessages.find((message) =>
    message.includes("Hydration failed")
  );

  expect(loginHydrationMessage).toBeUndefined();

  await page.fill('input[name="username"]', "admin");
  await page.fill('input[name="password"]', "Admin@123");

  await Promise.all([
    page.waitForURL("**/admin/leads", { waitUntil: "networkidle" }),
    page.click('button:has-text("Entrar")'),
  ]);

  await page.waitForTimeout(2000);

  const hydrationMessage = consoleMessages.find((message) =>
    message.includes("Hydration failed")
  );

  expect(hydrationMessage).toBeUndefined();
});
