const INIT_MIN_VALUE = 0;
const INIT_MAX_VALUE = 5;

const initialState = {
    counter: INIT_MIN_VALUE,
    minValue: INIT_MIN_VALUE,
    maxValue: INIT_MAX_VALUE,
    text: '',
    error: false,

    buttonDisabled: true,
    minError: false,
    maxError: false
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

type SetButtonDisabledType = {
    type: 'SET_BUTTON_DISABLED'
    value: boolean
}
type SetMinErrorType = {
    type: 'SET_MIN_ERROR'
    value: boolean
}
type SetMaxErrorType = {
    type: 'SET_MAX_ERROR'
    value: boolean
}


export type ActionsType =
    SetCounterType
    | SetMinValueType
    | SetMaxValueType
    | MakeMessageType
    | SetButtonPressedType
    | SetButtonDisabledType
    | SetMinErrorType
    | SetMaxErrorType

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

        case 'SET_BUTTON_DISABLED': {
            return {
                ...state,
                buttonDisabled: action.value
            }
        }
        case 'SET_MIN_ERROR': {
            return {
                ...state,
                minError: action.value
            }
        }
        case 'SET_MAX_ERROR': {
            return {
                ...state,
                maxError: action.value
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

export const setButtonDisabled = (value: boolean): SetButtonDisabledType => ({type: 'SET_BUTTON_DISABLED', value})
export const setMinError = (value: boolean): SetMinErrorType => ({type: 'SET_MIN_ERROR', value})
export const setMaxError = (value: boolean): SetMaxErrorType => ({type: 'SET_MAX_ERROR', value})