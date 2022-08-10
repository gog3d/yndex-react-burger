describe("Application", () => {
  beforeEach(() => {
    window.localStorage.setItem(
      'refreshToken', JSON.stringify('test-refreshToken')
    );
    cy.setCookie('accessToken', 'test-accessToken');
  });
  
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
  /*
  it('add another bun', () => {
    cy.get('[data-testid=ingredient_list]').contains('Краторная булка').trigger('dragstart');
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
    cy.get('[data-testid=ingredient_list]').contains('Соус фирменный Space Sauce').trigger('dragstart');
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
    cy.get('[data-testid=ingredient_list]').contains('Филе Люминесцентного тетраодонтимформа').trigger('dragstart');
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
  it('add main', () => {
    cy.get('[data-testid=ingredient_list]').contains('Хрустящие минеральные кольца').trigger('dragstart');
    cy.get('[data-testid=constructor_list_container]')
    .trigger('dragenter', { force: true })
    .trigger('dragover', { force: true })
    .trigger('drop', { force: true })
    .trigger('dragend', { force: true })
    .wait(10)
    .then(() => {
      cy.get('[data-testid=constructor_list_container]').find('span').contains('Хрустящие минеральные кольца')
    })
  });
  it('add main', () => {
    cy.get('[data-testid=ingredient_list]').contains('Кристаллы марсианских альфа-сахаридов').trigger('dragstart');
    cy.get('[data-testid=constructor_list_container]')
    .trigger('dragenter', { force: true })
    .trigger('dragover', { force: true })
    .trigger('drop', { force: true })
    .trigger('dragend', { force: true })
    .wait(10)
    .then(() => {
      cy.get('[data-testid=constructor_list_container]').find('span').contains('Кристаллы марсианских альфа-сахаридов')
    })
  });*/
  it('add main', () => {
    cy.get('[data-testid=ingredient_list]').contains('Мясо бессмертных моллюсков Protostomia').trigger('dragstart', { force: true });
    cy.get('[data-testid=constructor_list_container]')
    .trigger('dragenter', { force: true })
    .trigger('dragover', { force: true })
    .trigger('drop', { force: true })
    .trigger('dragend', { force: true })
    .wait(10)
    .then(() => {
      cy.get('[data-testid=constructor_list_container]').find('span').contains('Мясо бессмертных моллюсков Protostomia')
    })
  });
  it('get order', () => {
    cy.get('[data-testid=order_button').find('Button').click({ force: true });
  });
/*
  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });
*/
});