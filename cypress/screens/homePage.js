export class HomePage {  
    
    clickOnSignUpButton(){
        cy.get('#signin2').click()
    }

    clickOnLogInButton(){
        cy.get('#login2').click()
    }

    checkIfWelcomeMessageIsDisplayed(username){
       cy.get('#nameofuser').should('have.text', 'Welcome '+username)
    }
    
    checkIfLogoutButtonIsVisible(){
        cy.get('#logout2').should('be.visible')
    }

    clickOnElement(counter){
        cy.get(':nth-child('+counter+') > .card > .card-block')   
    }

    clickOnIphoneItemDetail(){
        cy.contains('Iphone').click()        
    }

    clickOnAddtoCartButton(){
        cy.contains('Add to cart').click()      
    }

    checkIfProductMessageIsDisplayed(){
        cy.on('window:alert',(txt)=>{
            //Assertion
            expect(txt).to.contains('Product added.');
            })          
    }

    clickOnCartButton(){
        cy.contains('Cart').click()              
    }

    clickOnPaceOrderButton(){
        cy.contains('Place Order').click()              
    }

    checkIfConfirmationMessageIsDisplayed(){
       cy.contains('Thank for your purchase')
    }
}

export const homePage = new HomePage()