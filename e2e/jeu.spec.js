import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("Type the secret...").click();
  await page.getByPlaceholder("Type the secret...").fill("12");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "CLICK ME" }).click();
  await page.getByPlaceholder("Type the secret...").dblclick();
  await page.getByPlaceholder("Type the secret...").fill("34");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "CLICK ME" }).click();
  await page.getByPlaceholder("Type the secret...").click();
  await page.getByPlaceholder("Type the secret...").fill("341");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "CLICK ME" }).click();
  await page.getByPlaceholder("Type the secret...").click();
  await page.getByPlaceholder("Type the secret...").fill("3451");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "CLICK ME" }).click();
  await page.getByPlaceholder("Type the secret...").dblclick();
  await page.getByPlaceholder("Type the secret...").fill("1234");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "CLICK ME" }).click();
  await page.getByRole("button", { name: "Add Red" }).click();
  await page.locator("div").nth(2).click();
  await page.getByRole("button", { name: "Add Green" }).click();
  await page.locator("#root div").nth(2).click();
  await page.getByRole("button", { name: "Add Blue" }).click();
  await page
    .locator("#root div")
    .filter({
      hasText:
        "Add RedAdd GreenAdd BlueResetCHECKTry Again Not_Please -_- just CLICK THE",
    })
    .locator("div")
    .nth(2)
    .click();
  await page.getByRole("button", { name: "Reset" }).click();
  await page
    .getByText(
      "Add RedAdd GreenAdd BlueResetCHECKTry Again Not_Please -_- just CLICK THE"
    )
    .click();
  await page.getByRole("button", { name: "Add Red" }).click();
  await page.getByRole("button", { name: "Add Green" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "CHECK" }).click();
  await page.getByText("Try Again Not_Please -_- just").click();
  await page
    .getByText(
      "Add RedAdd GreenAdd BlueResetCHECKTry Again Not_Please -_- just CLICK THE"
    )
    .click();
  await page.getByRole("button", { name: "Add Red" }).click();
  await page.getByRole("button", { name: "Add Green" }).click();
  await page.getByRole("button", { name: "Add Blue" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "CHECK" }).click();
  await page.getByRole("button", { name: "Add Red" }).click();
  await page.getByRole("button", { name: "Add Blue" }).click();
  await page.getByRole("button", { name: "Add Green" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "CHECK" }).click();
  await page.getByRole("button", { name: "🦴" }).click();
  await page.getByRole("button", { name: "🐶" }).click();
  await page.getByRole("heading", { name: "Who are you?" }).click();
  await page.getByText("Click the dog to submit").click();
  await page.getByRole("textbox", { name: "word" }).click();
  await page.getByRole("textbox", { name: "word" }).fill("cat");
  await page.getByRole("button", { name: "🐶" }).click();
  await page.getByRole("textbox", { name: "word" }).click();
  await page.getByRole("textbox", { name: "word" }).press("ControlOrMeta+a");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("textbox", { name: "word" }).fill("dog");
  await page.getByRole("heading", { name: "Who is a good boy" }).click();
  await page.getByRole("heading", { name: "You: whoof" }).click();
  await page.getByRole("heading", { name: "Yes you are!!" }).click();
  await page.getByRole("heading", { name: "You have won" }).click();
});
