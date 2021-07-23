export const INIT_MIN_VALUE = 0;
export const INIT_MAX_VALUE = 5;

const initialState = {
    counter: INIT_MIN_VALUE,
    minValue: INIT_MIN_VALUE,
    maxValue: INIT_MAX_VALUE,
    text: '',
    error: false,
}

type CounterStateType = typeof initialState



type SetCounterType = {
    type: 'SET_COUNTER_VALUE'
    value: number
}
type SetMinValueType = {
    type: 'SET_MIN_VALUE'
    value: number
}
type SetMaxValueType = {
    type: 'SET_MAX_VALUE'
    value: number
}

type MakeMessageType = {
    type: 'MAKE_MESSAGE'
    text: string
    error: boolean
}
type SetButtonPressedType = {
    type: 'SET_BUTTON_PRESSED'
}

export type ActionsType =
    SetCounterType
    | SetMinValueType
    | SetMaxValueType
    | MakeMessageType
    | SetButtonPressedType

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case 'SET_COUNTER_VALUE': {
            return {
                ...state,
                counter: action.value
            }
        }
        case 'SET_MIN_VALUE': {
            return {
                ...state,
                minValue: action.value
            }
        }
        case 'SET_MAX_VALUE': {
            return {
                ...state,
                maxValue: action.value
            }
        }

        case 'MAKE_MESSAGE': {
            return {
                ...state,
                text: action.text,
                error: action.error
            }
        }

        case 'SET_BUTTON_PRESSED': {
            return {
                ...state,
                counter: state.minValue,
                text: '',
                error: false
            }
        }

        default:
            return state
    }
}

export const setCounterValue = (value: number): SetCounterType => ({type: 'SET_COUNTER_VALUE', value})
export const setMinValue = (value: number): SetMinValueType => ({type: 'SET_MIN_VALUE', value})
export const setMaxValue = (value: number): SetMaxValueType => ({type: 'SET_MAX_VALUE', value})

export const makeMessage = (text: string, error: boolean): MakeMessageType => ({type: 'MAKE_MESSAGE', text, error})
export const setButtonPressed = (): SetButtonPressedType => ({type: 'SET_BUTTON_PRESSED'})