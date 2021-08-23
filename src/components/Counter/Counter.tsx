import React from 'react';
import s from './Counter.module.css'
import {Display} from '../Display/Display';
import {Button} from '../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import { StateType } from '../../store/store';
import {CounterStateType, setCounterValue} from '../../store/counter-reducer';


export const Counter = () => {
    const counterState = useSelector<StateType,CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const {
        counter,
        minValue,
        maxValue,
        text,
        error,
    } = counterState

    const increment = () => {
        if (counter < maxValue) {
            dispatch(setCounterValue(counter + 1))
        }
    }

    const reset = () => {
        dispatch(setCounterValue(minValue))
    }

    return (
        <div className={s.main}>

            <Display
                counterValue={counter}
                text={text}
                error={!!text ? error : counter >= maxValue}
            />

            <div className={s.buttons}>
                <Button
                    name={'Inc'}
                    disabled={!!text || counter >= maxValue}
                    callback={increment}
                />

                <Button
                    name={'Reset'}
                    disabled={!!text || counter === minValue}
                    callback={reset}
                />
            </div>

        </div>
    )
}