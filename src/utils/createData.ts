import { faker } from '@faker-js/faker';

export function dataBuilder() {
  return {
    id: faker.string.uuid(),
    contract: faker.date.anytime().getFullYear(),
    offer: faker.number.int(),
    data: faker.string.fromCharacters(['Buy', 'Sale']),
  };
}

const createData = (length = 10) => Array.from({ length }, dataBuilder);

export default createData;
