import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

import create from './reducer/create';
import RouterAPP from './router';

const clientRender = () => {
    const store = create(window.__INITIAL_STATE__);
    return () => (
        <Provider store={store}>
            <BrowserRouter>
                <RouterAPP></RouterAPP>
            </BrowserRouter>
        </Provider>
    );
}

// 供服务端渲染使用，请保持与 clientApp 一致
const serverApp = (props) => {
    const state = props;
    const store = create(state);
    return (
        <Provider store={store}>
            <StaticRouter location={state.url} context={state}>
                <RouterAPP></RouterAPP>
            </StaticRouter>
        </Provider>
    );
};

const App = webpackDefineSpaServer ? serverApp : clientRender();

export default App;
