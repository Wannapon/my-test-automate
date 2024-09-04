describe('APIs', () => {
    before(() => {
        cy.request('DELETE', 'www.example.com')
            .its('status')
            .should('be', 200);
        cy.request('POST', 'www.example.com')
            .its('status')
            .should('be', 200);
        cy.visit('www.example.com')
    });

    it('Test APIs 200', () => {
        cy.get().should()
    });

});