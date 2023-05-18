import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

// Define a type for the slice state
interface ScreenState {
  x: number;
  y: number;
}

// Define the initial state using that type
const initialState: ScreenState = {
  x: 0,
  y: 0,
};

export const screenSlice = createSlice({
  name: 'screen',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.x += 1;
    },
    decrement: (state) => {
      state.x -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.x += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = screenSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectScreenX = (state: RootState) => state.screen.x;

export default screenSlice.reducer;
