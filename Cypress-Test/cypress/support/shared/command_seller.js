Cypress.Commands.add('ReplyRFQ', () => {

    // กดเข้าโครงการ Project Automate test อันแรก
    cy.contains('Project Automate test').first().click()

    // กรอกราคาสินค้า
    cy.get(':nth-child(4) > .rfq-table-reponsive > .rfq-table-new > :nth-child(4) > .py-4 > :nth-child(4) > .rfq-table-col > .d-flex > .form-group > .form-control').type(2100)
    cy.get(':nth-child(4) > .rfq-table-reponsive > .rfq-table-new > :nth-child(5) > .py-4 > :nth-child(4) > .rfq-table-col > .d-flex > .form-group > .form-control').type(2200)
    cy.get(':nth-child(4) > .rfq-table-reponsive > .rfq-table-new > :nth-child(6) > .py-4 > :nth-child(4) > .rfq-table-col > .d-flex > .form-group > .form-control').type(2300)
    cy.get(':nth-child(4) > .rfq-table-reponsive > .rfq-table-new > :nth-child(7) > .py-4 > :nth-child(4) > .rfq-table-col > .d-flex > .form-group > .form-control').type(2400)

    // ส่วนลด
    cy.get(':nth-child(4) > .rfq-footer-new > :nth-child(2) > .col-xl-12 > .rfq-footer-card > :nth-child(3) > .col-8 > .d-flex > .col-5 > :nth-child(1) > .form-group > .form-control').type(500)

    // ค่าขนส่ง
    cy.get(':nth-child(4) > .rfq-footer-new > :nth-child(2) > .col-xl-12 > .rfq-footer-card > :nth-child(7) > .col-8 > .d-flex > .col-5 > .form-group > .form-control').type(1000)

    // กดตอบกลับ RFQ
    cy.get('.btn-confirm').click()
    // กดยืนยัน
    cy.get('.swal2-confirm').click()
})

Cypress.Commands.add('ReplyRFQ_CreditTerm', () => {

    // กดเข้าโครงการ Project Automate test อันแรก
    cy.contains('Project Automate test').first().click()

    // กรอกราคาสินค้า
    cy.get(':nth-child(4) > .rfq-table-reponsive > .rfq-table-new > :nth-child(4) > .py-4 > :nth-child(4) > .rfq-table-col > .d-flex > .form-group > .form-control').type(1100)
    cy.get(':nth-child(4) > .rfq-table-reponsive > .rfq-table-new > :nth-child(5) > .py-4 > :nth-child(4) > .rfq-table-col > .d-flex > .form-group > .form-control').type(1200)
    cy.get(':nth-child(4) > .rfq-table-reponsive > .rfq-table-new > :nth-child(6) > .py-4 > :nth-child(4) > .rfq-table-col > .d-flex > .form-group > .form-control').type(1300)
    cy.get(':nth-child(4) > .rfq-table-reponsive > .rfq-table-new > :nth-child(7) > .py-4 > :nth-child(4) > .rfq-table-col > .d-flex > .form-group > .form-control').type(1400)

    // รูปแบบการชำระเงิน เครดิต 15 วัน
    cy.get(':nth-child(4) > .rfq-footer-new > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .col-lg-12 > .rfq-footer-card > form > .row > :nth-child(2) > .form-select').select('เครดิต')
    cy.get(':nth-child(4) > .rfq-footer-new > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .col-lg-12 > .rfq-footer-card > form > .row > :nth-child(2) > .mt-2').select('15')

    // ส่วนลด
    cy.get(':nth-child(4) > .rfq-footer-new > :nth-child(2) > .col-xl-12 > .rfq-footer-card > :nth-child(3) > .col-8 > .d-flex > .col-5 > :nth-child(1) > .form-group > .form-control').type(200)

    // ค่าขนส่ง
    cy.get(':nth-child(4) > .rfq-footer-new > :nth-child(2) > .col-xl-12 > .rfq-footer-card > :nth-child(7) > .col-8 > .d-flex > .col-5 > .form-group > .form-control').type(500)

    // กดตอบกลับ RFQ
    cy.get('.btn-confirm').click()
    // กดยืนยัน
    cy.get('.swal2-confirm').click()
})