import {LocaleProvider} from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from  'react-router-dom'
import * as serviceWorker from './serviceWorker';
// import RouterMap from  './router/index'
import App from  './containers/App/index'
ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        < BrowserRouter >
            <App />
        </BrowserRouter>
    </LocaleProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
