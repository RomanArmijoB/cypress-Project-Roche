const { loginPage } = require("../screens/loginPage")
const { homePage } = require("../screens/homePage")
const { placeOrderDetailPage } = require("../screens/placeOrderDetailPage")
export const timeOut= 5000

beforeEach('Login to the app', () => {
    cy.openHomePage()
    homePage.clickOnLogInButton()
    loginPage.entersUserCredentials()
    cy.wait(timeOut)
    loginPage.clickOnLogButton()    
})

describe('Feature 2: Purchasing products', () => {
    
    it('Test-case-5:User adds a phone in the cart', () => {        
        homePage.clickOnIphoneItemDetail()
        homePage.clickOnAddtoCartButton()
        homePage.checkIfProductMessageIsDisplayed()
    });  


    it('Test-case-6:User purchases an order.', () => {
        homePage.clickOnIphoneItemDetail()
        cy.wait(timeOut)
        homePage.clickOnAddtoCartButton()
        homePage.checkIfProductMessageIsDisplayed()
        homePage.clickOnCartButton()
        cy.wait(timeOut)
        homePage.clickOnPaceOrderButton()        
        cy.wait(timeOut)
        placeOrderDetailPage.typePlaceOrderDetails('My card name', '1234567890123456789')

        placeOrderDetailPage.clickOnPurchaseButton()
        placeOrderDetailPage.checkContentOfConfirmationPopUpMessage()        
    });   

})  

