import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Mypage from './Pages/Mypage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <link href="https://fonts.googleapis.com/css2?family=Saira&display=swap" rel="stylesheet"></link>
    <link src="//widget.mixcloud.com/media/js/widgetApi.js" type="text/javascript"></link>
    <Mypage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
