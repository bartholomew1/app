describe('Main page E2E testing activities', () => {
    before(() => {
        cy.visit('/')
    })
    it('Are link elements on navigation bar present', () => {
        cy.get('a').should('have.length', 3).and('exist')
    })
})