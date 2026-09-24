const { test, expect } = require('@playwright/test');
const { timeLog } = require('node:console');
const { TIMEOUT } = require('node:dns');
const { text } = require('node:stream/consumers');
const{POManager}=require('../pageobjects/POManager');
//json=> string=> js object
const dataset=JSON.parse(JSON.stringify(require('../utils/TestData.json')));


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

for(const data of dataset)
{
test.only(`Playwright test for product ${data.productName}`, async ({ browser, page }) => {

    const context = await browser.newContext();
    // const page = await context.newPage();
    
    const poManager=new POManager(page);
    const loginPage = await poManager.getLoginPageObject();
    await loginPage.goTo();
   await loginPage.validLogin(data.userName, data.password);

    const dashboardpage=poManager.getDashboardPageObject();
    await dashboardpage.searchProductAddCart(data.productName);
    await dashboardpage.navigateToCart();

    const checkout=poManager.getCheckoutPageObject();
    checkout.Checoutpage(data.productName);
    
    const placeOrder= poManager.getPlaceOrderPageObject();
    await placeOrder.placeOrderForProduct(data.country,data.userName);
    await placeOrder.thankYouPage(page);
    await placeOrder.viewOrder();


    const v_id=poManager.getvalidationViewOrderpageObject();
    await v_id.orderIdValidation(placeOrder.order_id);

  




});}

test.only('playwright test for single user', async({page}) => 
{
  const data1=dataset[1];
     const poManager=new POManager(page);
    const loginPage =  poManager.getLoginPageObject();
    await loginPage.goTo();
   await loginPage.validLogin(data1.userName, data1.password);




});
