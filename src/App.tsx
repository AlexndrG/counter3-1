import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store/store';
import { CounterWithParams } from './components/CounterWithParams/CounterWithParams';

function App() {
    return (
        <Provider store={store}>
            <CounterWithParams/>
        </Provider>
    )
}

export default App;
