import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I visit the url {string}', (url) => {
	cy.visit(url);
});