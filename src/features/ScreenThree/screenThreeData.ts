import createData from '@/utils/createData';

const screenThreeData = createData(1);

export const uniqueContracts = [
  ...new Set(screenThreeData.map((row) => row.contract)),
];

export type ScreenThreeData = {
  id: string;
  contract: number | string;
  offer: number | string;
  data: string;
} & {
  data: 'Buy' | 'Sale' | string;
};
export type SelectedHeaders = Record<keyof ScreenThreeData, 0 | 1>;

export default screenThreeData;
