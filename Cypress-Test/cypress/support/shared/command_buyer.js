Cypress.Commands.add('CreateAndSendRFQ', () => {

    const projectName = 'Project Automate test';

    // go to create page and check route
    cy.get('.size-desktop > .btn').click()
    cy.url().should('contain', 'rfq/create')

    // select project
    cy.get('#project > .ng-select-container').click()
    cy.contains(projectName).click()

    // select due date
    cy.get('#duedate').click()

    // go to next month (click ">" in datepicker)
    cy.get('.next > span').click()

    // choose date
    cy.get('.bs-datepicker-body').contains('26').click()// เลือกวันที่ 26

    // cy.get('.bs-datepicker-body').contains('26').then((deliveryDate) => {
    //     if (deliveryDate.hasClass('is-other-month') || deliveryDate.hasClass('disabled')) {
    //         cy.get('.bs-datepicker-body').contains('30').click()// เลือกวันที่ 30
    //         cy.log('*** Oh yeah 30');
    //     } else {
    //         cy.get('.bs-datepicker-body').contains('26').click()// เลือกวันที่ 26
    //         cy.log('*** Oh yeah 26');
    //     }
    // })

    // select Payment method
    cy.get('#paymentMethodType > .ng-select-container').click()
    cy.contains('Cash').click()

    // fill product data
    cy.get('.pt-1 > :nth-child(2) > .col > .bg-rakmao').click() // add item row
    // type item1
    cy.get(':nth-child(1) > .table-list > .form-control').type('Items 1')
    cy.get(':nth-child(1) > .table-quantity > .form-control').type('1')
    cy.get(':nth-child(1) > [width="13%"] > .form-control').type('ea')

    // type item2
    cy.get(':nth-child(2) > .table-list > .form-control').type('Items 2')
    cy.get(':nth-child(2) > .table-quantity > .form-control').type('1')
    cy.get(':nth-child(2) > [width="13%"] > .form-control').type('ea')

    // add item from catalog
    cy.get('.button-smartsearch').click()
    cy.get('.col-md-4 > :nth-child(1) > .col-12').click()
    cy.get(':nth-child(1) > .pt-3 > :nth-child(5) > .ng-untouched').check()
    cy.get('.col-md-4 > :nth-child(4) > .col-12').click()
    cy.get(':nth-child(2) > .pt-3 > :nth-child(1) > .ng-untouched').check()
    cy.get('.mr-auto > .button-rakmao').click()
    cy.get(':nth-child(3) > .table-quantity > .form-control').type('1')
    cy.get(':nth-child(3) > [width="13%"] > .form-control').type('ea')
    cy.get(':nth-child(4) > .table-quantity > .form-control').type('1')
    cy.get(':nth-child(4) > [width="13%"] > .form-control').type('ea')

    // select preferred vendor
    cy.get('#preferredVendor').click().contains('Helltaker company').click()
    cy.get('.slider').click()

    // delivery date
    cy.get('#deliveryDate').click()

    // go to next month (click ">" in datepicker)
    cy.get('.next > span').click()

    // choose date
    cy.get('.bs-datepicker-body').contains('26').click()// เลือกวันที่ 26

    // cy.get('.bs-datepicker-body').contains('26').then((deliveryDate) => {
    //     if (deliveryDate.hasClass('is-other-month') || deliveryDate.hasClass('disabled')) {
    //         cy.get('.bs-datepicker-body').contains('30').click()// เลือกวันที่ 30
    //         cy.log('*** Oh yeah 30');
    //     } else {
    //         cy.get('.bs-datepicker-body').contains('26').click()// เลือกวันที่ 26
    //         cy.log('*** Oh yeah 26');
    //     }
    // })

    cy.get('#contactName').clear().type('Wannapon')
    cy.get('#contactPhone').clear().type('0631145831')
    cy.get('[type="email"]').clear().type('wannapon@builk.com')

    // fill textarea (remark)
    cy.get('#note').type('This RFQ Send by Automated')

    // check condition
    cy.get('#termsAndConditions').check()

    // send RFQ button
    cy.get('.justify-content-between > .d-flex > .text-white').click()

    // get Modal confirm and send
    cy.get('.row > .text-white').click()

    cy.url().should('include', '/rfq/success')
    cy.log('get url success !!!')

})

Cypress.Commands.add('WinRFQandSendPO', () => {
    // ไปหน้า ประวัติเอกสาร
    cy.get(':nth-child(1) > .size-desktop > :nth-child(2)').click()
    // กดเข้าโครงการ Project Automate test อันแรก
    cy.contains('Project Automate test').first().click()
    // go Compare sheet
    cy.get('.btn-outline-dark').click()
    // win quotation
    cy.get('.col-4 > .button-rakmao').click()
    // เลือกเงื่อนไขการ WIN ทั้งหมด
    cy.get('.un-item-select').click({ multiple: true })
    // กรอก Remark
    cy.get('.form-control').type('WIN by Automate')
    // กดยืนยันเหตุผลการ WIN
    cy.get('.modal-footer > :nth-child(2) > .button-rakmao').click()
    // click go to send PO
    cy.get(':nth-child(1) > .button-rakmao').click()
    // click generate report
    cy.get('.pr-md-2 > .btn-po').click()
    // click confirm generate report
    cy.get('.row > .button-rakmao')
    // type PO remark
    cy.get(':nth-child(6) > .form-control').type('Send PO by Automate')
    // save PO
    cy.get('.justify-content-end > .btn').click()
    // click send PO
    cy.get('.col-7 > .btn').click()
})