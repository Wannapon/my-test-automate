const buyerWeb = 'https://rakmao-web-test.builk.com/';
const sellerWeb = 'https://test-rakmao-seller.merudy.com/';

Cypress.Commands.add('LoginBuyer', () => {
    const username = 'wannapon@builk.com';
    const password = 'wannapon'

    const usernameAoei = 'kotchaphon@builk.com';
    const passwordAoei = 'Aei2204+'

    cy.visit(buyerWeb)
    cy.get('.size-desktop > .mr-4').click()
    cy.get('form.ng-untouched > :nth-child(1) > .form-control').type(username)
    cy.get('.form-group.mb-2 > div > .form-control').type(password)
    cy.get('.text-center > .btn').click()

    // check route url
    cy.url().should('contain', '/homepage')

    cy.log('--- Login Buyer success ---')
})

Cypress.Commands.add('LoginSeller', () => {
    const username = 'wannapon@builk.com';
    const password = 'wannapon'

    cy.visit(sellerWeb)
    cy.get('.rakmao-navbar > .d-flex > span').should('be.visible');
    cy.get(':nth-child(1) > .v-input__control > .v-input__slot').type(username)
    cy.get(':nth-child(2) > .v-input__control > .v-input__slot').type(password)
    cy.get('.btn-submit').click()

    // click accept in modal condition 
    // cy.get('.v-input--selection-controls__ripple').click()
    // cy.get('.btn-confirm').click()

    // check route url
    cy.url().should('contain', 'transaction/rfq')

    cy.log('--- Login Seller success ---')
})

Cypress.Commands.add('SharedCommand', () => {
    cy.log('Hello world1')
    cy.log('Hello world2')
    cy.log('Hello world3')
})
