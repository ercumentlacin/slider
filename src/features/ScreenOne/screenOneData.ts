import createData from '@/utils/createData';

const screenOneData = createData();

export const uniqueContracts = [
  ...new Set(screenOneData.map((row) => row.contract)),
];

export type ScreenOneData = {
  id: string;
  contract: number;
  offer: number;
  data: string;
} & {
  data: 'Buy' | 'Sale';
};
export type SelectedHeaders = Record<keyof ScreenOneData, 0 | 1>;

export default screenOneData;
