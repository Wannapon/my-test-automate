describe('เข้าสู่ระบบด้วย Role User', () => {

    it('step 1 : go to demo web', () => {
        cy.visit('https://example.cypress.io')
    })

    it('Does not do much!', function () {
        const sum = 1 + 1;
        expect(2).to.equal(sum)
    })

    it('Shared file', function () {
        cy.SharedCommand()
    })

});