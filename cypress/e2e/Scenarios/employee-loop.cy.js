describe('loop employee id', () => {

    let employee_id = ['user1', 'user2', 'user3', 'user4', 'user5']

    it('test loop', () => {
        for (let i = 0; i < employee_id.length; i++) {
            const emp_id = employee_id[i];
            it('scenario ' + i, () => {
                cy.log('i = ' + i)
                cy.log('empid = ' + employee_id)
                cy.log('Employee id = ' + emp_id)
            });
        }
    });
    // lolololololololololol //

});