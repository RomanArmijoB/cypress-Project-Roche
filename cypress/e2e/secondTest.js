const { loginPage } = require("../screens/loginPage")
const { homePage } = require("../screens/homePage")
const { placeOrderDetailPage } = require("../screens/placeOrderDetailPage")

const username = 'UserRomanArmijo'
const password = 'a123456'
const timeOut= 10000

beforeEach('login to the app', () => {
    cy.openHomePage()
    homePage.clickOnLogInButton()
    loginPage.entersUserCredentials(username, password)
    cy.wait(timeOut)
    loginPage.clickOnLogButton()    
})

describe('Feature name', () => {
       
    it('User adds a phone in the cart.', () => {        
        homePage.clickOnIphoneItemDetail()
        homePage.clicksOnAddtoCartButton()
        homePage.checkIfProductMessageIsDisplayed()
    });  


    it.only('User purchases an order.', () => {
        homePage.clickOnIphoneItemDetail()
        homePage.clickOnAddtoCartButton()
        homePage.checkIfProductMessageIsDisplayed()
        homePage.clickOnCartButton()
        homePage.clickOnPaceOrderButton()        

        placeOrderDetailPage.typePlaceOrderDetails('My card name', '1234567890123456789')
        cy.wait(timeOut)
        placeOrderDetailPage.clickOnPurchaseButton()
        cy.get('.sa-success').should('be.visible')
        cy.get('.sweet-alert > h2').should('be.visible')
    }); 

})  

