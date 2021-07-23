import {connect} from 'react-redux';
import {CounterWithParams} from './CounterWithParams';
import {StateType} from '../../store/store';
import {setCounterValue, setMaxValue, setMinValue} from '../../store/counter-reducer';


type MapStateToPropsType = {
    counter: number
    minValue: number
    maxValue: number
    text: string
    error: boolean
}

type MapDispatchToPropsType = {
    setCounterValue: (value: number) => void
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
}

export type CounterWithParamsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    counter: state.counter.counter,
    minValue: state.counter.minValue,
    maxValue: state.counter.maxValue,
    text: state.counter.text,
    error: state.counter.error,
})

export const CounterWithParamsContainer = connect(mapStateToProps,
    {
        setCounterValue,
        setMinValue,
        setMaxValue
    })(CounterWithParams)