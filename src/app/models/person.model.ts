import * as faker from 'faker';

export interface Person {
  firstName: string;
  lastName: string;
  id: number;
  position: string;
  details: PersonDetails;
}

export interface PersonDetails {
  phoneNumber: number;
  department: string;
  address: string;
  email: string;
}


export function createMockPerson(): Person {
  const newPerson: Person = {
    firstName: faker.name.firstName() as string,
    lastName: faker.name.lastName() as string,
    id: faker.random.number(),
    position: faker.name.jobTitle() as string,
    details: {
      phoneNumber: faker.phone.phoneNumber() as number,
      department: faker.commerce.department() as string,
      address: faker.address.streetAddress() as string,
      email: faker.internet.email() as string
    }
  };
  return newPerson;
}

export function createPersonsArray(): Array<Person> {
  const arraySize = 4;
  let i = 0;
  const personsArray: Array<Person> = [];

  while (i < arraySize) {
    personsArray.push(createMockPerson());
    i++;
  }
  return personsArray;
}
