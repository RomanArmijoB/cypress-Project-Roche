export class PlaceOrderDetailPage {     
        
    typePlaceOrderDetails(cardName, cretidCardNumber){
        cy.get('#name').type(cardName, {delay :0})
        cy.get('#card').type(cretidCardNumber, {delay :0})
    }
        
    clickOnPurchaseButton(){
        cy.contains('Purchase').click()              
    }

    checkContentOfConfirmationPopUpMessage(){
        cy.get('.sa-success').should('be.visible')
        cy.get('.sweet-alert > h2').should('be.visible')
    }
}

export const placeOrderDetailPage = new PlaceOrderDetailPage()
