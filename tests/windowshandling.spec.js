import{test} from '@playwright/test'

test('window Tab',async({context})=>{

const page=await context.newpage();

const newPage= await page.locator('(//a[@class="analystic"])[1]').click();
const newTab= await promise.all[page.waitForEvent('popup'),page.locator('(//button[@class="btn btn-info"])[1]')];
const newPageText= await newTab.locator('//span[text()="Documentation"]').click();

});
const newPage= await page.locator('(//a[@class="analystic"])[1]').click();
