const { test, expect } = require('@playwright/test');
const { timeLog } = require('node:console');
const { TIMEOUT } = require('node:dns');
const { text } = require('node:stream/consumers');

test('First Playwright Test', async ({ browser, page }) => {
    const context = await browser.newContext();
    // const page = await context.newPage();
    // await page.goto("https://rahulshettyacademy.com/angularpractice/");
    // await page.getByLabel("Check me out if you Love IceCreams!").click();
    // await page.getByLabel("Employed").click();
    // await page.getByLabel("Gender").selectOption("Female");
    // await page.getByPlaceholder("Password").fill("abc123");
    // await page.getByRole("button",{name:'submit'}).click();
    // await page.getByText(" The Form has been submitted successfully!.").isVisible();
    // await page.getByRole("link",{name:"Shop"}).click();
    // await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    
    await page.goto("https://www.flipkart.com/");
    await page.locator("//span[@class='b3wTlE']").click();
    await page.locator("(//input[@class='nw1UBF v1zwn26'])[1]").fill("T-shirt");
    await page.locator("(//input[@class='nw1UBF v1zwn26'])[1]").press("Enter");
   
const page1Promise = page.waitForEvent('popup');
   await page.locator("(//a[@class='atJtCj'])[2]").click();
   
    const page1 = await page1Promise;
   

   
   
  // await newpage1.locator("(//div[@class='_1psv1zeb9 _1psv1ze0 _1o6mltlk1 _1o6mltlf0 _1o6mltl4y _1o6mltl9z _7dzyg24y'])[1]").last().waitFor();
    await page1.locator("(//div[@class='_1psv1zeb9 _1psv1ze0 _1o6mltlk1 _1o6mltlf0 _1o6mltl4y _1o6mltl9z _7dzyg24y'])[1]").click();
       
     // await page1.getByText('Add to cart').click();
   await page1.locator("//div[contains(text(),'Add to cart')]").click();
    await page1.locator("(//img[@class='gNunGE'])[2]").click();
    await page1.pause();




    


});

test('Page Playwright Test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const userame= "akshay1379@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("//input[@id='userEmail']").fill(userame);
    await page.locator("//input[@id='userPassword']").fill("Rinku1990");
    await page.locator("//input[@type='submit']").click();

    const suggestion = page.locator("//div[@class='card-body']/button[2]"); //comman xpath for Add to cart


    await page.locator("//div[@class='card-body']").last().waitFor()
    const data = await page.locator("//div[@class='card-body']/h5/b").allTextContents();
    const text = "ZARA COAT 3";

    for (const [index, check] of data.entries()) {
        if (check.trim() === text) {


            //  await suggestion.nth(index).click(); // click on add to cart


            await page.locator("//button[@class='btn w-10 rounded']").nth(index).click();
            break;
        }
    }


    await page.locator("//button[@routerlink='/dashboard/cart']").click();

    await page.locator("//div/ul").last().waitFor();

    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
      await page.locator("//button[text()='Checkout']").click();
       await page.locator("(//input[@class='input txt text-validated'])[2]").pressSequentially('ind',{delay:100});
       await   page.locator("//section/button").last().waitFor();
        const data1= await page.locator("//section/button").allTextContents();
     const item="india";
     for(const[index,check] of data1.entries())
     {
        if(check.trim().toLowerCase()===item.toLowerCase())
        {
          await  page.locator("//section/button").nth(index).click();
        }
     }

    await expect( page.locator("//div/label")).toHaveText(userame);
     await page.locator("//a[text()='Place Order ']").click();

    const placeOrder= await page.locator("//td/h1[@class='hero-primary']").textContent();
    console.log(placeOrder);
    await expect(page.locator("//td/h1[@class='hero-primary']")).toHaveText(placeOrder);
     const orderId= await  page.locator("//td/label[@class='ng-star-inserted']").textContent();
     
     console.log(orderId);

        
     
     const myOrder= await page.locator("//button[@routerlink='/dashboard/myorders']").click();
     
         await page.locator("//tbody/tr").last().waitFor();

     const data2= await page.locator("//tbody/tr/th").allTextContents();
     console.log(data2);

     for(const[index, check] of data2.entries())
     {
        if(orderId.includes(check))  // check.includes(orderId) will be false as orderId me check hai, check me order nahi orderId big hai
        {
           console.log("table enter",index);
            await  page.locator("//tbody/tr/td/button[@class='btn btn-primary']").nth(index).click();
        }
     }
         const orderIdDetails= await page.locator("//div[@class='col-text -main']").textContent();
         console.log(orderIdDetails);
         expect(orderId.includes(orderIdDetails)).toBeTruthy();


    await page.pause();



});
test('@Web google search', async({browser, page}) => {
   
    const context = await browser.newContext();
   await page.goto("https://www.google.com/");
   await page.locator("//textarea[@class='gLFyf']").fill("akshay");
   await page.locator("//ul[@role='listbox']/li").last().waitFor();
 const data=  await page.locator("//ul[@role='listbox']/li").allTextContents();
 const item="akshay kumar age";
 for(const[index, check] of data.entries())
 {
    if(check.trim().toLowerCase().includes(item.toLowerCase()))
    {
          page.locator("//ul[@role='listbox']/li").nth(index).click();
          break;

    }
 }



});