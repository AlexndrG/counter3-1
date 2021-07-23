import {StateType} from '../store/store';

export const loadFromLocalStorage = () => {
    const serializedState = localStorage.getItem('counter-state')
    if (serializedState) {
        const loadedState: StateType = JSON.parse(serializedState)

        if (loadedState.counter.minValue <0 ||
            loadedState.counter.minValue >= loadedState.counter.maxValue) {
            return undefined
        }

        loadedState.counter.counter=loadedState.counter.minValue
        loadedState.counter.text=''
        loadedState.counter.error=false
        loadedState.counterSettings.buttonDisabled = true
        return loadedState
    }

    return undefined
}

export const saveToLocalStorage = (state: StateType) => {
    localStorage.setItem('counter-state', JSON.stringify(state))
}
