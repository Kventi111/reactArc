import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createReducer from './application/combine-reducers';
import rootSagas from './application/sagas'

// подключение саги к сторе а точнее создание мидделвары
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware
];

// конфигурация логера
const createLogger = require('redux-logger').createLogger; // eslint-disable-line global-require
const logger = createLogger({
  level: 'log',
  collapsed: true,
  timestamp: false,
  stateTransformer: state => state && state.toJS(),
  colors: {
    title: ({ type }) => {
      if (/_FAIL$/.test(type)) return '#CC0000';
      if (/^DAL_/.test(type)) return '#FF8000';
      return '#007586';
    },
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404'
  }
});
middlewares.push(logger);

const finalCreateStore = compose(
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)(createStore);

const configuredStore = finalCreateStore(createReducer({}));
sagaMiddleware.run(rootSagas);

export default configuredStore;
