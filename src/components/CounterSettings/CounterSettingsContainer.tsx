import {connect} from 'react-redux';
import {StateType} from '../../store/store';
import {CounterSettings} from './CounterSettings';
import {
    makeMessage,
    setButtonDisabled,
    setButtonPressed,
    setMaxError,
    setMaxValue,
    setMinError,
    setMinValue
} from '../../store/counter-reducer';

type MapStateToPropsType = {
    minValue: number
    maxValue: number

    buttonDisabled: boolean
    minError: boolean
    maxError: boolean
}

type MapDispatchToPropsType = {
    makeMessage: (text: string, error: boolean) => void
    setButtonPressed: () => void
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void

    setButtonDisabled: (value: boolean) => void
    setMinError: (value: boolean) => void
    setMaxError: (value: boolean) => void
}

export type CounterSettingsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType) => ({
    minValue: state.counter.minValue,
    maxValue: state.counter.maxValue,

    buttonDisabled: state.counter.buttonDisabled,
    minError: state.counter.minError,
    maxError: state.counter.maxError,
})

export const CounterSettingsContainer = connect(mapStateToProps,
    {
        makeMessage,
        setButtonPressed,
        setMinValue,
        setMaxValue,
        setButtonDisabled,
        setMinError,
        setMaxError
    })(CounterSettings)