import {connect} from 'react-redux';
import {Counter} from './Counter';
import {StateType} from '../../store/store';
import {setCounterValue} from '../../store/counter-reducer';


type MapStateToPropsType = {
    counter: number
    minValue: number
    maxValue: number
    text: string
    error: boolean
}

type MapDispatchToPropsType = {
    setCounterValue: (value: number) => void
}

export type CounterPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: StateType) => ({
    counter: state.counter.counter,
    minValue: state.counter.minValue,
    maxValue: state.counter.maxValue,
    text: state.counter.text,
    error: state.counter.error
})


export const CounterContainer = connect(mapStateToProps,
    {
        setCounterValue
    })(Counter)