class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.userName=page.locator("//input[@id='userEmail']");
        this.password=page.locator("//input[@id='userPassword']");
        this.signInbutton=page.locator("//input[@type='submit']");
    }
   async validLogin(userName,password)
    {
          await this.userName.fill(userName);
         await  this.password.fill(password);
         await  this.signInbutton.click();
    }
    async goTo()
     {
        await this.page.goto("https://rahulshettyacademy.com/client/");
     }
}
module.exports={LoginPage}