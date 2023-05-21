import { RootState, store } from '@/app/store';

import reducer, {
  ScreenState,
  changeBottomVerticalWindowValues,
  changeHorizontalWindowValues,
  changeTopVerticalWindowValues,
  selectBottomVerticalWindowValues,
  selectHorizontalWindowValues,
  selectTopVerticalWindowValues,
} from './screenSlice';

import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'screen',
  storage,
};

describe('screen reducer', () => {
  const initialState: ScreenState = {
    horizontalWindowValues: [50, 50],
    topVerticalWindowValues: [50, 50],
    bottomVerticalWindowValues: [50, 50],
  };

  const persistedScreenReducer = persistReducer(persistConfig, reducer);

  const store = configureStore({
    reducer: {
      screen: persistedScreenReducer,
    },
  });

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle changeHorizontalWindowValues', () => {
    const actual = reducer(
      initialState,
      changeHorizontalWindowValues([50, 50]),
    );
    expect(actual.horizontalWindowValues).toEqual([50, 50]);
  });

  it('should handle changeTopVerticalWindowValues', () => {
    const actual = reducer(
      initialState,
      changeTopVerticalWindowValues([50, 50]),
    );
    expect(actual.topVerticalWindowValues).toEqual([50, 50]);
  });

  it('should handle changeBottomVerticalWindowValues', () => {
    const actual = reducer(
      initialState,
      changeBottomVerticalWindowValues([50, 50]),
    );
    expect(actual.bottomVerticalWindowValues).toEqual([50, 50]);
  });

  it('should handle selectHorizontalWindowValues', () => {
    store.getState();
    const actual = selectHorizontalWindowValues(store.getState());
    expect(actual).toEqual([50, 50]);
  });

  it('should handle selectTopVerticalWindowValues', () => {
    const actual = selectTopVerticalWindowValues(store.getState());
    expect(actual).toEqual([50, 50]);
  });

  it('should handle selectBottomVerticalWindowValues', () => {
    const actual = selectBottomVerticalWindowValues(store.getState());
    expect(actual).toEqual([50, 50]);
  });
});
