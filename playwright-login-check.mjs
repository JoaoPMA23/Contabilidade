import { chromium } from "playwright";

const messages = [];

const browser = await chromium.launch();
const page = await browser.newPage();
page.on("console", (msg) => {
  messages.push(`[console:${msg.type()}] ${msg.text()}`);
});
page.on("pageerror", (error) => {
  messages.push(`[pageerror] ${error.message}`);
});
await page.goto("http://localhost:3000/login", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);
console.log(messages.join("\n"));
await browser.close();
