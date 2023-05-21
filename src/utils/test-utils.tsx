import { AppStore, RootState, persistor, setupStore } from '@/app/store';
import { RenderOptions, render } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PreloadedState } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const customRender = (
  ui: ReactElement,
  {
    preloadedState = {} as PreloadedState<RootState>,
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  function AllTheProviders({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
  return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
