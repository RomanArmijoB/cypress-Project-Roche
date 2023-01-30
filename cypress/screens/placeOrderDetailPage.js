export class PlaceOrderDetailPage {     
        
    typePlaceOrderDetails(cardName, cretidCardNumber){
        cy.get('#name').type(cardName, {delay :0})
        cy.get('#card').type(cretidCardNumber, {delay :0})
    }
        
    clickOnPurchaseButton(){
        cy.contains('Purchase').click()              
    }
}

export const placeOrderDetailPage = new PlaceOrderDetailPage()
