
describe('Scenario pick from running', () => {

    // ******* Catch local storage data *******
    // before(() => {
    //     cy.request('POST', 'https://rakmao-api-test.builk.com/api/v1/Authentication/Login',
    //         {
    //             "email": "wannapon@builk.com",
    //             "password": "wannapon"
    //         }
    //     ).then((response) => {
    //         const token = response.body.data.token;
    //         const companyId = "1bf5ec89-0d6e-4145-849d-d92a60e43ee8"
    //         localStorage.setItem('accessToken', token);
    //         localStorage.setItem('companyId', companyId);
    //         cy.log('Token is = ' + token)
    //         cy.log('Token is = ' + companyId)
    //         cy.log('Token is = ' + JSON.stringify(response))
    //     });
    //     cy.visit('https://rakmao-web-test.builk.com')
    // }); 
    // *********************************


    // ******* Loop send *******
    for (let i = 1; i <= 5; i++) {
        it('buyer send RFQ', () => {
            cy.LoginBuyer()
            cy.CreateAndSendRFQ()
        });

        // Quotation cash 
        it('seller reply QT', () => {
            cy.LoginSeller()
            cy.ReplyRFQ_CreditTerm()
        });

        // Quotation Credit term 
        // it('seller reply Credit term QT', () => {
        //     cy.LoginSeller()
        //     cy.ReplyRFQ_CreditTerm()
        // });
    };
    // ***************************


    // ******* Single send *******
    it('buyer send RFQ', () => {
        cy.LoginBuyer()
        cy.CreateAndSendRFQ()
    });

    it('seller reply QT', () => {
        cy.LoginSeller()
        cy.ReplyRFQ_CreditTerm()
    });

    it('seller reply Credit term QT', () => {
        cy.LoginSeller()
        cy.ReplyRFQ_CreditTerm()
    });
    // ***************************

});
