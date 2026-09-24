class DashboardPage
{
    constructor(page)
    {
        this.products=page.locator("//div[@class='card-body']");
        this.productsText=page.locator("//div[@class='card-body']/h5/b");
        this.requiredProduct=page.locator("//button[@class='btn w-10 rounded']");
        this.cart=page.locator("//button[@routerlink='/dashboard/cart']");
    }

  async  searchProductAddCart(productName)
    {
        await this.products.last().waitFor()
    const data = await this.productsText.allTextContents();
    

    for (const [index, check] of data.entries()) {
        if (check.trim() === productName) {


            //   await page.locator("//button[@class='btn w-10 rounded']").nth(index).click(); chaining me direct likho requiredProduct karne ki need nahi


            await this.requiredProduct.nth(index).click();
            break;
        }
    }


    
    }
   async navigateToCart()
    {
      await  this.cart.click();
    }
}
module.exports={DashboardPage}
