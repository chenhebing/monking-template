import { createStore } from 'redux';

import reducer from './index';

export default (state) => {
    const store = createStore(reducer, state);
    if (module.hot) {
        module.hot.accept('./index', () => {
            const nextReducer = require('./index').default;
            store.replaceReducer(nextReducer);
        });
    }
    return store;
};
