import faker from 'faker'

const fakeSignUp = () => {
  const fakerData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'a'
  }
  return fakerData
}

export { fakeSignUp }
