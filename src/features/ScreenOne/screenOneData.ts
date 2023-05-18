import { faker } from '@faker-js/faker';

export const createScreenOneData = () => ({
  id: faker.string.uuid(),
  contract: faker.date.anytime().getFullYear(),
  offer: faker.number.int(),
  data: faker.string.fromCharacters(['Buy', 'Sale']),
});

const screenOneData = Array.from({ length: 10 }, createScreenOneData);

export const uniqueContracts = [
  ...new Set(screenOneData.map((row) => row.contract)),
];

export type ScreenOneData = ReturnType<typeof createScreenOneData> & {
  data: 'Buy' | 'Sale';
};
export type SelectedHeaders = Record<keyof ScreenOneData, 0 | 1>;

export default screenOneData;
