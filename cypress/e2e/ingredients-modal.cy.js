describe("Application", () => {
  it('should be avaliable on localhost:3000', () => {
    cy.visit("http://localhost:3000/");
  });
  
  it('open bun modal and close', () => {
    cy.get('[data-testid=ingredient_list]').contains('Флюоресцентная булка').click();
    cy.get('[data-testid=modal_children]').should('be.visible');
    cy.get('[data-testid=modal_children]').contains('Флюоресцентная булка');
    cy.get('[data-testid=modal_overlay]').click( {force: true});
    cy.get('[data-testid=modal_children]').should('not.exist');
    cy.get('[data-testid=ingredient_list]').contains('Флюоресцентная булка').click();
    cy.get('[data-testid=modal_children]').should('be.visible');
    cy.get('[data-testid=modal_children]').contains('Флюоресцентная булка');
    cy.get('[data-testid = modal_close_button]').click();
    cy.get('[data-testid=modal_children]').should('not.exist');
  });

  it('open soucess modal and close', () => {
    cy.get('[data-testid=ingredient_list]').contains('Соус Spicy-X').click();
    cy.get('[data-testid=modal_children]').should('be.visible');
    cy.get('[data-testid=modal_children]').contains('Соус Spicy-X');
    cy.get('[data-testid=modal_overlay]').click( {force: true});
    cy.get('[data-testid=modal_children]').should('not.exist');
    cy.get('[data-testid=ingredient_list]').contains('Соус Spicy-X').click();
    cy.get('[data-testid=modal_children]').should('be.visible');
    cy.get('[data-testid=modal_children]').contains('Соус Spicy-X');
    cy.get('[data-testid = modal_close_button]').click();
    cy.get('[data-testid=modal_children]').should('not.exist');
  });
  
  it('open main modal and close', () => {
    cy.get('[data-testid=ingredient_list]').contains('Говяжий метеорит (отбивная)').click();
    cy.get('[data-testid=modal_children]').should('be.visible');
    cy.get('[data-testid=modal_children]').contains('Говяжий метеорит (отбивная)');
    cy.get('[data-testid=modal_overlay]').click( {force: true});
    cy.get('[data-testid=modal_children]').should('not.exist');
    cy.get('[data-testid=ingredient_list]').contains('Говяжий метеорит (отбивная)').click();
    cy.get('[data-testid=modal_children]').should('be.visible');
    cy.get('[data-testid=modal_children]').contains('Говяжий метеорит (отбивная)');
    cy.get('[data-testid = modal_close_button]').click();
    cy.get('[data-testid=modal_children]').should('not.exist');
  });
});