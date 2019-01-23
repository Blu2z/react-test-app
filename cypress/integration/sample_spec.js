context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000');
  });

  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    });

    it('test', () => {
      cy.get('.float-right.btn.btn-primary.btn-sm').click();
      expect(cy.get('.table.table-hover'));
    });

      it('редактирование полей', () => {
        cy.get('.float-right.btn.btn-primary.btn-sm').click();

      cy.get('.btn.btn-primary.btn-sm')
        .first()
        .click();

          cy.get('input[name="candidateName"]').first().clear().type('test');

      cy.get('input[name="candidateName"]').should('have.value', 'test');

      cy.get('.btn.btn-primary.btn-sm')
        .first()
        .click();

        expect(cy.get('tbody>tr>td').next().contains('test'));
    });
  });
});
