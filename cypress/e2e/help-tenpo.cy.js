describe('Support Home Options', () => {
    it('Should Navigate to help when select a category', () => {
      cy.visit('')
      cy.contains('.contenedor-item h2', 'Comisiones')
      .parent('.flex-movile')
      .click();

      cy.url().should('eq', 'https://ayuda.tenpo.cl/support/solutions/folders/43000556674');  // Reemplaza con la URL esperada

      cy.get('#grupo-acordeon')  // Asegúrate de que este selector sea único
      .contains('.titulo-pregunta', '¿Tenpo tiene comisiones?')
      .click();

      cy.url().should('eq', 'https://ayuda.tenpo.cl/support/solutions/articles/43000514669--tenpo-tiene-comisiones-')

      cy.get('h2[class="heading title-info-pregunta"]').should('exist').contains('¿Tenpo tiene comisiones?')
    });
  })