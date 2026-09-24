const{expect}= require('@playwright/test');
class PlaceOrder

{
  
  constructor(page)
  {
    this.order_id=null;
    this.page=page;
    this.selectCountry=page.locator("(//input[@class='input txt text-validated'])[2]");
    this.selectCountryOptions=page.locator("//section/button");
    this.emailIdText= page.locator("//div/label")
    this.placeOrder=page.locator("//a[text()='Place Order ']");
    this.thankYouMessage=page.locator("//td/h1[@class='hero-primary']");
   this.orderId= page.locator("//td/label[@class='ng-star-inserted']");

     this.myorder=page.locator("//button[@routerlink='/dashboard/myorders']");
     this.tableRows=page.locator("//tbody/tr");
     this.tableHeading=page.locator("//tbody/tr/th");
     this.viewButton= page.locator("//tbody/tr/td/button[@class='btn btn-primary']");
    

  }

  async placeOrderForProduct(country,userName)
  {
     await this.selectCountry.pressSequentially('ind', { delay: 100 });
     
    await this.selectCountryOptions.last().waitFor();
    const data1 = await this.selectCountryOptions.allTextContents();
    
    for (const [index, check] of data1.entries()) {
        if (check.trim().toLowerCase() === country.toLowerCase()) {
            await this.selectCountryOptions.nth(index).click();
        }
    }

    await expect(this.emailIdText).toHaveText(userName);
    await this.placeOrder.click();
    
    

    
  }

  async thankYouPage(page)
  {
    const thankYouMessage = await this.thankYouMessage.textContent();
    console.log(thankYouMessage);
    await expect(this.thankYouMessage).toHaveText(thankYouMessage);
    this.order_id = await this.orderId.textContent();
    console.log(this.order_id);
  }

  async viewOrder()
  {
       this.myorder.click();

    await this.tableRows.last().waitFor();

    const data2 = await this.tableHeading.allTextContents();
    console.log(data2);

    for (const [index, check] of data2.entries()) {
        if (this.order_id.includes(check))  // check.includes(orderId) will be false as orderId me check hai, check me order nahi orderId big hai
        {
            console.log("table index:- ", index);
            await  this.viewButton.nth(index).click();
        }
    }
  }

}
module.exports={PlaceOrder}