import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import reducers from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  let middleware = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middleware = [...middleware, logger];
  }

  const composeEnhancers = composeWithDevTools({});
  const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

  // run HMR if enabled
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // enable HMR for Redux
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(reducers);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
