import SignupPage from "../pages/SignupPage"
import SignupFactorie from "../../factories/SignupFactorie"
const singupPage = new SignupPage

var user = SignupFactorie.user()

Given("acesso a pagina de login", () => {
  singupPage.go()
})

When('preencho todos os campos obrigatorios e submeto o formulario', () => {

  singupPage.fillForm(user)
  singupPage.submitForm()

})

Then('realizar o cadastro com sucesso', () => {

  singupPage.confirmLogin(user)

})
When('não preencho nenhum dado e tento realizar o login', () => {
  singupPage.loginEmpty()
})
Then('é exibida mensagem de erro de email nao informado', () => {
  var error = "An email address required."

  singupPage.Login()
  singupPage.errorValidation(error)

})

When('preencho apenas o email', () => {

  singupPage.loginEmail(user)
  singupPage.Login()

})

Then('é exibida mensagem de erro de senha nao informada', () => {
  var error = "Password is required."
  singupPage.errorValidation(error)
})

When('preencho apenas os dados com a senha incorreta', () => {
  user.password = 123
  singupPage.loginData(user)
  singupPage.Login()
})

Then('é exibida mensagem de erro de senha incorreta', () => {
  var error = "Invalid password."
  singupPage.errorValidation(error)
})

When('preencho apenas os dados com email invalido', () => {
  user.email = "aaaaa"
  singupPage.loginData(user)
  singupPage.Login()

})

Then('é exibida mensagem de erro de email invalido', () => {
  var error = "Invalid email address."
  singupPage.errorValidation(error)
})

When('preencho os dados com email e senha validos', () => {
  singupPage.loginData(user)
  singupPage.Login()
})

Then('login é realizado com sucesso', () => {
  singupPage.confirmLogin(user)
})