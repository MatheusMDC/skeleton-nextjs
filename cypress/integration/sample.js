describe('Navigation', () => {
	it('should navigate to the about page', () => {
		cy.intercept(
			{
				method: 'GET', // Route all GET requests
				url: 'https://5ffe327fd9ddad0017f68e6b.mockapi.io/api/v1/resource', // that have a URL that matches '/users/*'
			},
			[{
				'createdAt': '2021-10-14T17:32:39.094Z',
				'name': 'Mock Mock',
				'avatar': 'https://cdn.fakercloud.com/avatars/amywebbb_128.jpg',
				'id': '1'
			}] // and force the response
		).as('getUsers'); // and assign an alias

		cy.visit('http://localhost:3000/');


		cy.get('a[href*="negociacao"]').click();

		cy.url().should('include', '/negociacao');

		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait(10000);

		cy.get('fieldset > legend').contains('Comprador');
	});
});