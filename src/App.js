import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import store from './store'
import Home from './pages/Home'
import Comps from './pages/Comps';
import Lifecycle from './pages/Lifecycle';
import Contenttext from './pages/fatherson/Contenttext';

function App() {
  return (
    <div>
        <Provider store={store}>
            <Home></Home>
            <Comps />
            {/* <Lifecycle /> */}
            <Contenttext />
        </Provider>
    </div>
  );
}

export default App;
