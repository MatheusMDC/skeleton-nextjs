import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I see the path {string} on the url', (path) => {
	cy.url().should('include', path);
});