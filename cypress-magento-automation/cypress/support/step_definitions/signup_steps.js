// cypress/support/steps/signup.steps.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignupPage from '../../integration/pages/signupPage'; // Correct path for signupPage
import LoginPage from '../../integration/pages/loginPage';   // Correct path for loginPage

const signupPage = new SignupPage();
const loginPage = new LoginPage();

Given('the user is on the signup page', () => {
  signupPage.visit();
});

When('the user enters valid sign-up details', () => {
  const userData = signupPage.fillSignupForm('testuser', 'testuser@example.com', 'Password123');
  cy.wrap(userData).as('userData');
});

When('submits the form', () => {
  signupPage.submitForm();
});

Then('the user account should be created successfully', () => {
  signupPage.verifyAccountCreation();
});

When('Logout as a user', () => {
  signupPage.logout();
});

Then('verify user logut', () => {
  signupPage.verifyLogut();
});


Then('the user should be able to log in with the new account', () => {
  cy.get('@userData').then(({ email, password, firstName, lastName }) => {
  loginPage.signIn();
  loginPage.fillLoginForm(email, password);
  loginPage.submitForm();
  loginPage.verifyLogin(email, firstName, lastName );
  });
});