import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {counterSettingsReducer} from './counterSettings-reducer';

const reducers = combineReducers({
    counter: counterReducer,
    counterSettings: counterSettingsReducer
})

export type StateType = ReturnType<typeof reducers>

export const store = createStore(reducers)

