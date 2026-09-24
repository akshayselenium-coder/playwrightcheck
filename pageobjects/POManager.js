const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { Checkout } = require('./Checkout');
const { PlaceOrder } = require('./PlaceOrder');
const { ValidationViewOrder } = require('./ValidationViewOrder');

class POManager {

    constructor(page) 
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.checkoutPage = new Checkout(this.page);
        this.placeorderpage = new PlaceOrder(this.page);
        this.validationViewOrderpage = new ValidationViewOrder(this.page)

    }

    getLoginPageObject() {
        return this.loginPage;
    }
    getDashboardPageObject() {
        return this.dashboardPage;
    }
    getCheckoutPageObject() {
        return this.checkoutPage;
    }
    getPlaceOrderPageObject() {
        return this.placeorderpage
    }
    getvalidationViewOrderpageObject() {
        return this.validationViewOrderpage
    }
}
module.exports = { POManager }