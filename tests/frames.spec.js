import{test} from '@playwright/test';

test('frames',async({page})=>{

    page.goto('https://demo.automationtesting.in/Frames.html');
const innerframe=await page.frameLocator('//iframe[@src="SingleFrame.html"]');
await innerframe.locator('//input[@type="text"]').fill('Hello somu');
await page.waitForTimeout(5000);





    // page.locator('(//a[@class="analystic"])[2]').click();
    // const outterFrame= await page.frameLocator('//iframe[@src="MultipleFrames.html"]');
    // const innerFrame = await outterFrame.frameLocator('//iframe[@src="SingleFrame.html"]');
    // await innerFrame.locator('//input[@type="text"]').fill("welcome to some");
    




});

