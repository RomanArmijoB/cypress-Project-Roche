const password = 'a123456'

function userID_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

export class SignUpPage {     
    
    entersUserCredentials(){
        const username =userID_Alpha_Numeric()        
        cy.get('#sign-username').type(username).should('have.value', username)
        cy.get('#sign-password').type(password).should('have.value', password)
    }
    
    clickOnSignUpButton(){
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()            
    }

    checkIfSignUpSuccessfulMessageIsDisplayed(){
        cy.on('window:alert',(txt)=>{
            //Assertion
            expect(txt).to.contains('Sign up successful.');
            })          
    }
}

export const signUpPage = new SignUpPage()
