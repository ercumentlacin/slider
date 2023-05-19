// eslint-disable-next-line import/no-extraneous-dependencies
import '@total-typescript/ts-reset';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store.ts';
import App from './features/App.tsx';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
