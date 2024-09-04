describe('Test client', () => {
    it('test client intercept', () => {
        cy.intercept('GET', '')
            .reply(200, {
                name: 'test',
                id: '12345'
            });
        cy.visit('');
        cy.get().should('have.text', '12345');
    });
});