import {StateType} from '../store/store';

export const loadFromLocalStorage = () => {
    const serializedState = localStorage.getItem('counter-state')
    if (serializedState) {
        return JSON.parse(serializedState)
    }

    return undefined
}

export const saveToLocalStorage = (state: StateType) => {
    localStorage.setItem('counter-state', JSON.stringify(state))
}



/*

import {INIT_MAX_VALUE, INIT_MIN_VALUE} from '../store/counter-reducer';

const MIN_VALUE_NAME = 'CounterMinValue'
const MAX_VALUE_NAME = 'CounterMaxValue'

export const loadFromLocalStorage = ():number[] => {
    const minString = localStorage.getItem(MIN_VALUE_NAME)
    const maxString = localStorage.getItem(MAX_VALUE_NAME)

    if (minString && maxString) {
        const minNumber = JSON.parse(minString)
        const maxNumber = JSON.parse(maxString)
        return [minNumber, maxNumber]
    }

    return [INIT_MIN_VALUE, INIT_MAX_VALUE]
}

export const SaveToLocalStorage = (data: number[]) => {
    localStorage.setItem(MIN_VALUE_NAME, JSON.stringify(data[0]))
    localStorage.setItem(MAX_VALUE_NAME, JSON.stringify(data[1]))
}

*/