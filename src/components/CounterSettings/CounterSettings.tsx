import React from 'react';
import s from './CounterSettings.module.css';
import {Button} from '../Button/Button';
import {Changer} from '../Changer/Changer';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../store/store';
import {
    setButtonDisabled,
    setMaxError,
    setMinError
} from '../../store/counterSettings-reducer';
import {makeMessage, setButtonPressed, setMaxValue, setMinValue} from '../../store/counter-reducer';

export const CounterSettings = () => {
    const allState = useSelector<StateType,StateType>(state => state)
    const dispatch = useDispatch()

    const {
        minValue,
        maxValue,
    } = allState.counter

    const {
        buttonDisabled,
        minError,
        maxError,
    } = allState.counterSettings


    const checkError = (minValue: number, maxValue: number) => {
        const minError = minValue < 0 || minValue >= maxValue
        const maxError = maxValue < 0 || maxValue <= minValue
        dispatch(setMinError(minError))
        dispatch(setMaxError(maxError))

        const error = minError || maxError
        dispatch(setButtonDisabled(error))
        if (error) {
            dispatch(makeMessage('Incorrect value!', true))
        } else {
            dispatch(makeMessage(`Enter values and press 'Set'`, false))
        }
    }

    const changeMaxValue = (maxValue: number) => {
        dispatch(setMaxValue(maxValue))
        checkError(minValue, maxValue)
    }

    const changeMinValue = (minValue: number) => {
        dispatch(setMinValue(minValue))
        checkError(minValue, maxValue)
    }

    const buttonPressed = () => {
        dispatch(setButtonDisabled(true))
        dispatch(setButtonPressed())
    }


    return (
        <div className={s.main}>

            <div className={s.changers}>
                <Changer
                    text={'max value:'}
                    value={maxValue}
                    changeValue={changeMaxValue}
                    error={maxError}
                />

                <Changer
                    text={'start value:'}
                    value={minValue}
                    changeValue={changeMinValue}
                    error={minError}
                />
            </div>

            <div className={s.buttons}>
                <Button
                    name={'Set'}
                    disabled={buttonDisabled}
                    callback={buttonPressed}
                />
            </div>

        </div>
    )
}