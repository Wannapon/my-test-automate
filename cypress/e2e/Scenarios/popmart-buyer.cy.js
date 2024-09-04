// cypress/integration/popmart_purchase.spec.js

describe('Popmart Purchase Automation', () => {

    it('asd', () => {

        // เข้าสินค้าเว็บ
        cy.visit('https://www.popmart.com/th/products/1036/JACKSON%20WANG%20MAGIC%20MAN%20SERIES%20FIGURES');

        // ยอมรับเงื่อนไข
        if (cy.get('.policy_acceptBtn__ZNU71') != null) {
            cy.get('.policy_acceptBtn__ZNU71').click()
        }

        // กรอกจำนวน
        cy.get('.index_quantityInfoBlock__ZlxOe > .ant-input').clear().type('6')
        // add to cart 
        cy.contains('เพิ่มไปยังตะกร้า').click()

        // เลือกทั้งชุด
        cy.contains('ทั้งชุด').click()
        cy.contains('เพิ่มไปยังตะกร้า').click()

        cy.get('.index_cartItem__xumFD').click()
        // cy.get('button', 'ชำระเงิน')

    });
});