import { When, Given, Then } from 'cypress-cucumber-preprocessor/steps';

When('I write the value {string} on the async autocomplete', (value) => {
	cy.get('input')
		.type(value);
});

Given('The buyier api is mocked', () => {
	cy.intercept(
		{
			method: 'GET', // Route all GET requests
			url: '**/api/v1/resource', // that have a URL that matches '/users/*'
		},
		[{
			'createdAt': '2021-10-14T17:32:39.094Z',
			'name': 'Mock Mock',
			'avatar': 'https://cdn.fakercloud.com/avatars/amywebbb_128.jpg',
			'id': '1'
		}] // and force the response
	).as('getUsers');
});

Then('The async input should display the value "Mock Mock"', () => {
	cy.get('#sample-option-0')
		.should('have.text', 'Mock Mock');
});