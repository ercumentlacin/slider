import type { RootState } from '@/app/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface ScreenState {
  horizontalWindowValues: number[];
  topVerticalWindowValues: number[];
  bottomVerticalWindowValues: number[];
}

const initialState: ScreenState = {
  horizontalWindowValues: [50, 50],
  topVerticalWindowValues: [50, 50],
  bottomVerticalWindowValues: [50, 50],
};

export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    changeHorizontalWindowValues: (state, action: PayloadAction<number[]>) => {
      state.horizontalWindowValues = action.payload;
    },
    changeTopVerticalWindowValues: (state, action: PayloadAction<number[]>) => {
      state.topVerticalWindowValues = action.payload;
    },
    changeBottomVerticalWindowValues: (
      state,
      action: PayloadAction<number[]>,
    ) => {
      state.bottomVerticalWindowValues = action.payload;
    },
  },
});

export const {
  changeHorizontalWindowValues,
  changeTopVerticalWindowValues,
  changeBottomVerticalWindowValues,
} = screenSlice.actions;

export const selectHorizontalWindowValues = (state: RootState) =>
  state.screen.horizontalWindowValues;
export const selectTopVerticalWindowValues = (state: RootState) =>
  state.screen.topVerticalWindowValues;
export const selectBottomVerticalWindowValues = (state: RootState) =>
  state.screen.bottomVerticalWindowValues;

export default screenSlice.reducer;
