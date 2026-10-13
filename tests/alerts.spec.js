import { test } from "@playwright/test";

test("Single Alerts page", async ({ page }) => {
  //   await page.goto("https://demo.automationtesting.in/Register.html");

  //   await page.locator("#Skills").scrollIntoViewIfNeeded();
  //   await page.waitForTimeout(5000);
  // //   await page.locator("#Skills").selectOption("Android");
  //   await page.locator("#msdd").click();
  //   await page.locator("//a[text()='Catalan']").click();
  //   await page.locator("//a[text()='Croatian']").click();
  //   await page.waitForTimeout(5000);

  page.once("dialog", async (promptAlert) => {
    console.log(promptAlert.message());
    await promptAlert.accept("AutomationTestinguser");
  });
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.locator("//a[text()='Alert with Textbox ']").click();
  await page.locator("//button[@onclick='promptbox()']").click();
  await page.waitForTimeout(5000);

  //   page.once("dialog", async (dialog) => {
  //     console.log(dialog.message());
  //     await page.waitForTimeout(5000);

  //     await dialog.accept();

  //   await page.locator("//*[text()='Alert with OK ']").click();
  //   await page.locator("//button[contains(@class,'btn-danger')]").click();
  //   await page.waitForTimeout(5000);
});
