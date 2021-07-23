import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store/store';
import { CounterWithParamsContainer } from './components/CounterWithParams/CounterWithParamsContainer';

function App() {
    return (
        <Provider store={store}>
            <CounterWithParamsContainer/>
        </Provider>
    )
}

export default App;
