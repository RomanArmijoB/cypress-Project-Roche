const { loginPage } = require("../screens/loginPage")
const { homePage } = require("../screens/homePage")
const { signUpPage } = require("../screens/signUpPage")
export const timeOut= 10000

beforeEach('Login to the app', () => {
    cy.openHomePage()    
})

describe('Registering and authentication', () => {

    it('Test-case-1: User creates a new account on the website Product Store', () => {        
        homePage.clickOnSignUpButton()
        cy.wait(timeOut)
        signUpPage.entersUserCredentials()
        cy.wait(timeOut)
        signUpPage.clickOnSignUpButton()
        signUpPage.checkIfSignUpSuccessfulMessageIsDisplayed()
    });   


    it('Test-case-2: User logs on the website Product Store', () => {        
        homePage.clickOnLogInButton()
        loginPage.entersUserCredentials()
        cy.wait(timeOut)
        loginPage.clickOnLogButton()    
    });    
    
    

})  

