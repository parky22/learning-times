import { createStore as reduxCreateStore } from 'redux';

import reducers from './reducers';
import preloader from './preloader';

const createStore = (hydratedState) => {
  return reduxCreateStore(reducers, preloader(hydratedState));
}

export default createStore;
