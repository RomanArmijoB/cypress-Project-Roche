const { signUpPage } = require("../support/page_objects/signUpPage")
const { homePage } = require("../support/page_objects/homePage")

beforeEach('login to the app', () => {
    cy.openHomePage()    
})

describe('Registering and authentication', () => {
    it('User creates a new account on the website Product Store', () => {        
        homePage.clickOnSignUpButton()
        signUpPage.entersUserCredentials()
        signUpPage.clickOnAddtoCartButton()
        signUpPage.checkIfSignUpSuccessfulMessageIsDisplayed()
    });  
})  

