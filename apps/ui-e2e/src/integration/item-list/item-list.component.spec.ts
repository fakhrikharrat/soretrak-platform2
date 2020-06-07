describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=itemlistcomponent--primary'));

  it('should render the component', () => {
    cy.get('soretrak-platform-item-list').should('exist');
  });
});
