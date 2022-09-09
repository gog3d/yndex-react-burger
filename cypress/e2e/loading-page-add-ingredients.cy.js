describe("Application", () => {
  it('should be avaliable on localhost:3000', () => {
    cy.visit("http://localhost:3000/");
    cy.wait(10);
  });
  
  it('add bun', () => {
    cy.get('[data-testid=ingredient_list]').contains('Флюоресцентная булка').trigger('dragstart', { force: true });
    cy.get('[data-testid=constructor_list_container]')
    .trigger('dragenter', { force: true })
    .trigger('dragover', { force: true })
    .trigger('drop', { force: true })
    .trigger('dragend', { force: true })
    .wait(10)
    .then(() => {
      cy.get('[data-testid=constructor_list_container]').find('span').contains('Флюоресцентная булка')
    })
  });
  
  it('add another bun', () => {
    cy.get('[data-testid=ingredient_list]').contains('Краторная булка').trigger('dragstart', { force: true });
    cy.get('[data-testid=constructor_list_container]')
    .trigger('dragenter', { force: true })
    .trigger('dragover', { force: true })
    .trigger('drop', { force: true })
    .trigger('dragend', { force: true })
    .wait(10)
    .then(() => {
      cy.get('[data-testid=constructor_list_container]').find('span').contains('Краторная булка')
    })
  });
  it('add soucess', () => {
    cy.get('[data-testid=ingredient_list]').contains('Соус фирменный Space Sauce').trigger('dragstart', { force: true });
    cy.get('[data-testid=constructor_list_container]')
    .trigger('dragenter', { force: true })
    .trigger('dragover', { force: true })
    .trigger('drop', { force: true })
    .trigger('dragend', { force: true })
    .wait(10)
    .then(() => {
      cy.get('[data-testid=constructor_list_container]').find('span').contains('Соус фирменный Space Sauce')
    })
  });
  it('add main', () => {
    cy.get('[data-testid=ingredient_list]').contains('Филе Люминесцентного тетраодонтимформа').trigger('dragstart', { force: true });
    cy.get('[data-testid=constructor_list_container]')
    .trigger('dragenter', { force: true })
    .trigger('dragover', { force: true })
    .trigger('drop', { force: true })
    .trigger('dragend', { force: true })
    .wait(10)
    .then(() => {
      cy.get('[data-testid=constructor_list_container]').find('span').contains('Филе Люминесцентного тетраодонтимформа')
    })
  });

});