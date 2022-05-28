Feature: Cadastro e Login

  Scenario: Realiza cadastro
    Given acesso a pagina de login
    When  preencho todos os campos obrigatorios e submeto o formulario
    Then  realizar o cadastro com sucesso

    
  Scenario: Realiza Login corretamente
    Given acesso a pagina de login
    When  preencho os dados com email e senha validos
    Then  login é realizado com sucesso

  Scenario: Realiza Login sem informar nenhum dado
    Given acesso a pagina de login
    When  não preencho nenhum dado e tento realizar o login
    Then  é exibida mensagem de erro de email nao informado

  Scenario: Realiza Login sem informar a senha
    Given acesso a pagina de login
    When  preencho apenas o email
    Then  é exibida mensagem de erro de senha nao informada

  Scenario: Realiza Login informando senha incorreta
    Given acesso a pagina de login
    When  preencho apenas os dados com a senha incorreta
    Then  é exibida mensagem de erro de senha incorreta    
    
  Scenario: Realiza Login informando email incorreto
    Given acesso a pagina de login
    When  preencho apenas os dados com email invalido
    Then  é exibida mensagem de erro de email invalido  
