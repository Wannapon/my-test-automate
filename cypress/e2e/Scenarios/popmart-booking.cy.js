
describe('Scenario 1', () => {

    let booking = 'https://popmart.pubcastplus.com'

    it('go to booking', () => {

        cy.visit(booking) // to web popmart
        cy.get('.flex-auto > :nth-child(5)').click() // click เลือกสาขา ปกติอันที่5 จะเป้น Central ladprao

        // login line
        cy.origin('https://access.line.me', () => {
            cy.get('input[name="tid"]')
                .type('wannaponrotjanarungtawee@gmail.com');
            cy.get('input[name="tpasswd"]')
                .type('sealcalme007');
            cy.get('button[type="submit"]')
                .click();
        });

        // ชื่อ นามสกุล เบอร์โทร บัตรปชช --> term and conditions --> cloundflare --> confirm
        cy.get('#date_3').click()
        cy.get('input[id=":r2:"]').type('ExampleFirstname') // input firstname
        cy.get('input[id=":r3:"]').type('ExampleLastname') // input lastname
        cy.get('input[placeholder*="XXXXXXXXXX"]').type('12345678') // input phone no

        cy.get('.MuiSelect-select').click() // กด dropdown เวลา
        cy.get('.MuiList-root').contains('12:00-12:30').click() // เลือกเวลา

        // cy.get('[type="radio"]')
        //     .first().check()
        // cy.contains('National ID Card Number')
        //     .click().type('กรอกเลขบัตร')

        // cy.contains('Next')
        //     .click()

        // // summary page
        // cy.get('[type="radio"]')
        //     .first().check()
        // cy.contains('CONFIRM >')
        //     .click()

    }); // close it 'go to booking'

}); // close describe