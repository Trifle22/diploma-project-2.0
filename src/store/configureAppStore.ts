import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { rootReducer } from './rootReducer';
import { rootSaga } from '../sagas/rootSaga';

export const configureAppStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware]
    });

    sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store);

    return { store, persistor };
};
