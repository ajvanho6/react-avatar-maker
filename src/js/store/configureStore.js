import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
     /* eslint-disable no-underscore-dangle */
     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

     const store = createStore(
         rootReducer,
         initialState,
         composeEnhancers(applyMiddleware(sagaMiddleware, createLogger()))
     );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    store.runSaga = sagaMiddleware.run;
    store.close = () => { return store.dispatch(END); };
    return store;
}
