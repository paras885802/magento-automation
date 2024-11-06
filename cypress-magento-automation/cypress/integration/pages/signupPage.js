// cypress/integration/pages/signupPage.js
import faker from 'faker';

class SignupPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }
  
    fillSignupForm() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();

      cy.get('input[name="firstname"]').should('be.visible').type(firstName);
      cy.get('input[id="lastname"]').should('be.visible').type(lastName);
      cy.get('input[name="email"]').should('be.visible').type(email);
      cy.get('input[title="Password"]').should('be.visible').type(password);
      cy.get('input[name="password_confirmation"]').should('be.visible').type(password);
      return { firstName, lastName, email, password };
    }
  
    submitForm() {
      cy.get('button[title="Create an Account"]').should('be.visible')
      .and('not.be.disabled') .click();
    }
  
    verifyAccountCreation() {
      cy.wait(10000);
      cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
    }

    logout(){
      cy.get('button[data-action="customer-menu-toggle"]').eq(0).should('be.visible').click();
      cy.get('li[class="authorization-link"] > a').eq(0).should('be.visible').click();
    }

    verifyLogut(){
      cy.contains('You are signed out').should('be.visible');
      
    }
  }
  
  export default SignupPage;
  