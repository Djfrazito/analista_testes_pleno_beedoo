import SignupElements from '../../support/elements/SignupElements'
const signupElements = new SignupElements


class SignupPage {

  go() {
    cy.visit('/')
  }

  fillForm(user) {
    //insere o email na pagina inicial de cadastro
    cy.get(signupElements.inputEmailCreate()).type(user.email)
    cy.get(signupElements.buttonSubmit()).click()
    cy.wait(2000)

    //preenche os campos obrigatorios do formulario de cadastro
    cy.get(signupElements.optionGender()).click()
    cy.get(signupElements.firstName()).type(user.firstName)
    cy.get(signupElements.lastName()).type(user.lastName)
    cy.get(signupElements.password()).type(user.password)
    cy.get(signupElements.addressStreet()).type(user.address.street)
    cy.get(signupElements.addressCity()).type(user.address.city)
    cy.get(signupElements.addressState()).select(user.address.state)
    cy.get(signupElements.addressPostCode()).type(user.address.postCode)
    cy.get(signupElements.phone()).type(user.phone)

  }

  submitForm() {
    cy.get(signupElements.buttonSubmitAccount()).click()
  }

  confirmLogin(user) {
    cy.get(signupElements.loginConfirm()).should('have.text', user.firstName + " " + user.lastName)

  }

  Login() {
    cy.get(signupElements.submitLogin()).click()
  }

  loginEmpty() {
    cy.get(signupElements.inputEmail()).should('be.visible')
    cy.get(signupElements.inputPassword()).should('be.visible')
  }

  loginEmail(user) {

    cy.get(signupElements.inputEmail()).type(user.email)
    cy.get(signupElements.inputPassword()).should('be.visible')
  }
  loginData(user) {

    cy.get(signupElements.inputEmail()).should('be.visible').type(user.email)
    cy.get(signupElements.inputPassword()).should('be.visible').type(user.password)
  }

  errorValidation(error) {
    cy.contains(error).should('have.text', error)

  }
}

export default SignupPage