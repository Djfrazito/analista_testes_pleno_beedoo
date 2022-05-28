const { faker } = require('@faker-js/faker')


export default {

  user: function () {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email(firstName)
    var password = faker.internet.password()
    var phone = faker.phone.phoneNumber('73 #### ####')

    var data = {
      firstName: `${firstName}`,
      lastName: `${lastName}`,
      email: `${email}`,
      password: `${password}`,
      phone: `${phone}`,
      address: {
        postCode: '00000',
        street: 'Rua da Pituba',
        city: 'Teixeira de Freitas/BA',
        state: 'Colorado'
      }
    }

    return data
  }
}