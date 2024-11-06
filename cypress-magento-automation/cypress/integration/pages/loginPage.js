// cypress/integration/pages/loginPage.js

class LoginPage {
    signIn() {
      cy.wait(1000);
      cy.get('a[href*="customer/account/login"]').eq(0).should('be.visible').click();
    }
  
    fillLoginForm(email, password) {
      cy.get('input[name="login[username]"]').type(email);
      cy.get('input[name="login[password]"]').type(password);
    }
  
    submitForm() {
      cy.get('button[name="send"]').eq(0).click();
    }
  
    verifyLogin(email, firstName, lastName ) {
      cy.get('span[data-ui-id="page-title-wrapper"]').should('contain', 'My Account');
      cy.get('div.box-content').eq(0).should('contain', email);
      cy.get('div.box-content').eq(0).should('contain', firstName);
      cy.get('div.box-content').eq(0).should('contain', lastName);
    }
  }
  
  export default LoginPage;
  