const{expect}=require('@playwright/test');
class Checkout
{

    constructor(page)

    {
        this.page=page;
        this.checkout=page.locator("//button[text()='Checkout']");
    }

   async Checoutpage(productName)
    {
         await this.page.locator("//div/ul").last().waitFor();
        
           // const bool = await this.page.locator(`h3:has-text("${productName}")`).isVisible(); //both are okay
             const bool = await this.page.locator("h3:has-text('"+productName+"')").isVisible(); // both are okay
             expect(bool).toBeTruthy();
            await this.checkout.click();
    }
}
module.exports={Checkout}