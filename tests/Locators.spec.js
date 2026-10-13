import { test } from "@playwright/test";

test("Testing page", async ({page}) => {
  await page.goto("https://demo.automationtesting.in/Register.html");

  const pageName = await page.locator("//input[@placeholder='First Name']");

  await pageName.fill("somu");

  const lastName = await page.locator("(//input[contains(@class,'form-control')])[2]");

  await lastName.fill("Vicky");

  const addressName = await page.locator("//textarea[@rows='3']");

  await addressName.fill("coimbatore,Tamilnadu");

  const emailName = await page.locator("//input[@ng-model='EmailAdress']");

  await emailName.fill("somuvicky001@gmail.com");

  const phoneName = await page.locator("//input[@type='tel']");

  await phoneName.fill("8220852628");

  const genderName = await page.locator("//input[@value='Male']");

  await genderName.click();

  const hobbiesName = await page.locator("//input[@id='checkbox1']");

  await hobbiesName.check();

  await page.locator("//div[@id='msdd']").click()

  await page.getByText('Arabic').click()

  await page.getByText('French').click

  await page.waitForTimeout(6000);
  
  







/*
  const skillName= await page.locator("//select[@ng-model='skill']");

  await skillName.selectOption({index:4});

  const selectedElement= await skillName.locator('option:checked').textcontent();

  console.log(selectedElement)

  */


















  






});
