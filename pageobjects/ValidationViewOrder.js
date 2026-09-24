
const{expect}=require('@playwright/test');
const{PlaceOrder}=require('./PlaceOrder')
class ValidationViewOrder
{
   constructor(page)
   {
    this.page=page;
  // this.orderIdDetails= page.locator("//div[@class='col-text -main']")
   }

 async orderIdValidation(oid)
   {
    
    
       const order_IdDetails = await this.page.locator("//div[@class='col-text -main']").textContent();
        
        console.log(order_IdDetails);
        expect(oid.includes(order_IdDetails)).toBeTruthy();
        await this.page.pause();
   }
}
module.exports={ValidationViewOrder}