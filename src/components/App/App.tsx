import React from 'react';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { store } from '../../store';
import { PagesRouter } from './PagesRouter';
import { Notifier } from '../Notifier/Notifier';

export const App = () => (
    <Provider store={store}>
        <SnackbarProvider>
            <Notifier />
            <PagesRouter />
        </SnackbarProvider>
    </Provider>
);
