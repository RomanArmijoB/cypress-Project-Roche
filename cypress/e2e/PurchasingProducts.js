const { loginPage } = require("../screens/loginPage")
const { homePage } = require("../screens/homePage")
const { placeOrderDetailPage } = require("../screens/placeOrderDetailPage")
const { signUpPage } = require("../screens/signUpPage")

const username = 'UserRomanArmijo'
const password = 'a123456'
const timeOut= 10000

beforeEach('login to the app', () => {
    cy.openHomePage()
    homePage.clickOnLogInButton()
    loginPage.entersUserCredentials(username, password)
    loginPage.clickOnLogButton()    
})

describe('Feature name', () => {
       
    it('User adds a phone in the cart.', () => {        
        homePage.clickOnIphoneItemDetail()
        homePage.clicksOnAddtoCartButton()
        homePage.checkIfProductMessageIsDisplayed()
    });  


    it('User purchases an order.', () => {
        homePage.clickOnIphoneItemDetail()
        homePage.clickOnAddtoCartButton()
        homePage.checkIfProductMessageIsDisplayed()
        homePage.clickOnCartButton()
        homePage.clickOnPaceOrderButton()        

        placeOrderDetailPage.typePlaceOrderDetails('My card name', '1234567890123456789')

        placeOrderDetailPage.clickOnPurchaseButton()
        placeOrderDetailPage.checkContentOfConfirmationPopUpMessage()        
    }); 

    it('User creates a new account on the website Product Store', () => {        
        homePage.clickOnSignUpButton()
        signUpPage.entersUserCredentials()
        signUpPage.clickOnAddtoCartButton()
        signUpPage.checkIfSignUpSuccessfulMessageIsDisplayed()
    });  

})  

