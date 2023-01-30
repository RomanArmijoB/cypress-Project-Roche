const username = 'UserRomanArmijo'
const password = 'a123456'

export class LoginPage {     
        
    entersUserCredentials(){
        cy.get('#loginusername').type(username, {delay :0})
        cy.get('#loginpassword').type(password, {delay :0})
    }
    
    clickOnLogButton(){
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()    
    }
}

export const loginPage = new LoginPage()