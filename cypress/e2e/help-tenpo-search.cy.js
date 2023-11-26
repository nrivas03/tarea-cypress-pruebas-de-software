describe('Search for help', () => {
    it('Should show a error image and text when have not results', () => {
      const wordToSearch = 'hola'
      cy.visit('')
      cy.get('input[id="support-search-input"]').type(`${wordToSearch}{enter}`)
      cy.get('div[class="sin-resultados dil"]').contains(`0 resultados para "${wordToSearch}"`).should('be.visible')
      cy.get('div[class=image-sin-resultados]').should('be.visible')
    });

    it('Should show the results when the search exists', () => {
      const wordToSearch = 'debito'
      cy.visit('')
      cy.get('input[id="support-search-input"]').type(`${wordToSearch}{enter}`)
      cy.get('ul[class=search-results-list]').should('exist').should('have.length.gte', 1)
    })
  })