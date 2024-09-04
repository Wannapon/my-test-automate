// variable 
const siteTest = 'https://rakmao-web-test.builk.com/homepage';
const localRakmao = 'http://localhost:4200/';
const sellerTest = 'https://test-rakmao-seller.merudy.com/';
const username = 'wannapon@builk.com';
const password = 'wannapon';

describe('Scenario 1-e2e', () => {

  let rfqId = '';
  let projectName = 'ทดสอบ Payment';

  beforeEach(() => {
    // cy.visit(localRakmao)
    //   cy.contains('เข้าสู่ระบบ').click() // Use contains for get something by Text in FE
    //   // cy.get("[type='email']").type(username)
    //   // cy.get("[type='password']").type(password)
    //   cy.login()
    //   cy.get('#login-btn').click()
    //   cy.url().should('contain', '/homepage')

    //   // btn in ads-modal และตรวจสอบ Modal เพราะ modal บางทีไม่แสดงเนื่องจากยังไม่ครบเวลาที่จะแสดงใหม่
    //   cy.get('.modal-content').then((adsModal) => {
    //     if (adsModal) {
    //       cy.wait(3000) // wait 3s
    //       cy.get('#not-interested').click()
    //     }
    //   })

    // cy.log(Cypress.dayjs(new Date()).locale('th').format('dddd D MMMM YYYY'));

  });

  for (let index = 0; index <= 5; index++) {

    it('Buyer [Create RFQ] and [Send RFQ]', () => {

      cy.loginBuyer()
      cy.closeAds()

      // go to create page
      cy.contains('ขอใบเสนอราคา').click()

      // select project
      cy.get('#project').click()
      // cy.contains('โครงการ Test').click()
      cy.contains(projectName).click()

      // select duedate in datepicker
      cy.get('#duedate').click()

      cy.get('.next').click() // go to next month (click ">" in datepicker)
      cy.get('.bs-datepicker-body').contains('26').click()// เลือกวันที่ 26

      // select payment method
      cy.get('#paymentMethodType').click()
      cy.contains('Cash').click()

      // fill product data
      cy.get('#itemList')
      cy.get('#table-product-name').type('This is product name')
      cy.get('#table-product-quantity').type('1')
      cy.get('#table-product-unit').type('ea')

      cy.get('#preferredVendor').click().contains('Helltaker company').click()
      // *contains ไม่สามารถจับอย่างอื่นได้นอกจาก Text เช่น ID number element
      cy.get('.slider').click()

      // choose address = ที่อยู่เดียวกับใบกำกับภาษี
      cy.get('#checkboxInvoice').check()

      // select deliverydate in datepicker
      cy.get('#deliveryDate').click()
      cy.get('.next').click() // go to next month (click ">" in datepicker)
      cy.get('.bs-datepicker-body').contains('26').click()// เลือกวันที่ 26

      // get contact and fill contact-email
      cy.get('#contactName')
      cy.get('#contactPhone')
      cy.get('#contactEmail')

      // fill textarea (remark)
      cy.get('#note').type('This RFQ Send by Automated : Test payment')

      // check condition
      cy.get('#termsAndConditions').check()

      // draft RFQ btn
      // cy.get('#draft-rfq').click()

      // send RFQ button
      cy.get('#send-rfq').click()

      // take screen shot after send for looking validate or fails
      // cy.screenshot('create-rfq')

      // get Modal confirm and send
      cy.get('.modal-content').contains('ตกลง').click()

      cy.wait(3000) // wait 3s
      cy.contains('กลับไปหน้าขอใบเสนอราคา').click()

      // get rfq id after create
      rfqId = cy.get('#rfq-id').then((rfqcreateid) => {
        rfqId = rfqcreateid.text()
        cy.log(rfqId)
      })
    });

    it('Seller [reply QT]', () => {
      // login seller 
      cy.visit(sellerTest)
      cy.get("[type='email']").type(username)
      cy.get("[type='password']").type(password)
      cy.get("[type='submit']").click()

      cy.wait(3000) // wait 3s for load page

      cy.contains(projectName).first().click() // เลือก RFQ ใบแรก
      // reply quotation
      cy.get('.d-flex > .form-group > .form-control').type('1000') // กรอกราคาสินค้า 1000
      cy.get('[style="position: relative;"] > .form-control').type('This Quotation reply by Automated') // กรอก Remark
      cy.get(':nth-child(7) > .col-8 > .d-flex > .col-5 > .form-group > .form-control').type(1000) // กรอกค่าขนส่ง 1000
      cy.get('.btn-confirm').click() // กดส่ง
      cy.get('.swal2-confirm').click() // กดตกลงใน Modal
    });

    // it('Buyer [Receive QT] and [Request revise]', () => {
    //   cy.visit(localRakmao)
    //   cy.contains('เข้าสู่ระบบ').click()
    //   cy.get("[type='email']").type(username)
    //   cy.get("[type='password']").type(password)
    //   cy.get('#login-btn').click()
    //   cy.url().should('contain', '/homepage')

    //   // btn in ads-modal และตรวจสอบ Modal เพราะ modal บางทีไม่แสดงเนื่องจากยังไม่ครบเวลาที่จะแสดงใหม่
    //   cy.get('#not-interested').then((btn) => {
    //     if (btn) {
    //       cy.wait(3000) // wait 3s
    //       cy.get('#not-interested').click()
    //     }
    //   })

    //   cy.contains('ประวัติเอกสาร').click()
    //   cy.log(rfqId)

    //   cy.contains(rfqId).click()
    //   // cy.contains('โครงการ Test').first().click()

    //   cy.get('#to-compare-sheet').click()
    //   cy.contains('REQUEST REVISE').click()
    //   cy.contains('This is product name ').click()
    //   cy.get('textarea').type('Request revise by automated')
    //   cy.get('button').contains('ตกลง').click()
    //   cy.wait(3000) // wait page for 3s
    // });

    // it('Seller [Reply revise]', () => {
    //   cy.visit(sellerTest)
    //   // login seller 
    //   cy.get("[type='email']").type(username)
    //   cy.get("[type='password']").type(password)
    //   cy.get("[type='submit']").click()
    //   cy.url().should('contain', '/transaction/rfq')
    //   cy.wait(3000) // wait 3s for load page

    //   // cy.get('.rfq-tag').and('contain', 'Negotiate').first().click() // เลือก RFQ ใบแรก //* ควรจะใช้แบบนี้แต่ฝั่ง Seller เขียน FE ให้กดเข้ายาก จึงไม่สามารถใช้ได้
    //   cy.contains('โครงการ Test').first().click()
    //   cy.get('.d-flex > .form-group > .form-control').type(888)
    //   cy.get('.btn-confirm').click()
    //   cy.wait(2000) // wait 2s for show modal
    //   cy.get('.swal2-confirm').click()
    // });

    it('Buyer [WIN] and [Send PO]', () => {
      cy.loginBuyer()
      cy.closeAds()

      cy.contains('ประวัติเอกสาร').click()
      cy.log(rfqId)
      // cy.contains(rfqId).click()
      cy.contains(projectName).first().click()
      cy.get('#to-compare-sheet').click()

      cy.contains('WIN').click()
      cy.get('.un-item-select').click({ multiple: true })
      cy.get('textarea').type('WIN QT all reason [AT]')
      cy.get('button').contains('ตกลง').click()

      // cy.get('.d-flex > .btn-warning').click() // ปุ่ม CreatePO ใน Quotation หลัง WIN

      // cy.get('.modal-content').children().get('button').contains('ออกใบสั่งซื้อ').click()
      cy.get(':nth-child(1) > .button-rakmao').contains('ออกใบสั่งซื้อ').click()
      cy.wait(2000)
      cy.contains('ออกใบสั่งซื้อผ่านระบบรักเหมา').click()
      cy.contains('ตกลง').click()
      cy.wait(3000)

      // 
      cy.log('rfqId = ' + rfqId);
      cy.get('#po-remark').type("PO-From-Rfq" + rfqId)
      cy.contains('บันทึกการเปลี่ยนแปลง').click()
      cy.wait(2000)
      cy.get('button').contains('ส่งใบสั่งซื้อ').click()
    });

    // it('Seller [Receive PO] and [Request cancel PO]', () => {
    //   cy.visit(sellerTest)
    //   // login seller 
    //   cy.get("[type='email']").type(username)
    //   cy.get("[type='password']").type(password)
    //   cy.get("[type='submit']").click()
    //   cy.url().should('contain', '/transaction/rfq')
    //   cy.wait(2000) // wait 3s for load page

    //   cy.contains('โครงการ Test').first().click()
    //   cy.contains('ขอยกเลิกใบสั่งซื้อ').click()

    //   cy.get('.v-select__slot').click()
    //   cy.contains('อื่นๆ (โปรดระบุในหมายเหตุ)').click()
    //   cy.get(':nth-child(1) > .form-control').type('Request cancel PO by AT')
    //   cy.get(':nth-child(1) > [style="text-align: center;"] > .btn-confirm').click()
    //   cy.get(':nth-child(6) > .btn-confirm').click()
    //   cy.get('.swal2-confirm').click()
    // });

    // it('Buyer [Accept request cancel PO]', () => {
    //   cy.visit(localRakmao)
    //   cy.contains('เข้าสู่ระบบ').click()
    //   cy.get("[type='email']").type(username)
    //   cy.get("[type='password']").type(password)
    //   cy.get('#login-btn').click()
    //   cy.url().should('contain', '/homepage')

    //   // btn in ads-modal และตรวจสอบ Modal เพราะ modal บางทีไม่แสดงเนื่องจากยังไม่ครบเวลาที่จะแสดงใหม่
    //   cy.get('.modal-content').then((btn) => {
    //     if (btn) {
    //       cy.wait(3000) // wait 3s
    //       cy.get('#not-interested').click()
    //     }
    //   })

    //   cy.contains('ประวัติเอกสาร').click()
    //   cy.contains('ประวัติการสั่งซื้อ').click()
    //   cy.contains('Requested Cancel by Seller').first().click()
    //   cy.get('button').contains('ยืนยัน').click()
    // });

  }//close for loop

}); // close describe