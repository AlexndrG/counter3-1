import React, {useEffect} from 'react';
import s from './CounterWithParams.module.css'
import {CounterWithParamsPropsType} from './CounterWithParamsContainer';
import {CounterSettingsContainer} from '../CounterSettings/CounterSettingsContainer';
import {CounterContainer} from '../Counter/CounterContainer';

const MIN_VALUE_NAME = 'CounterMinValue'
const MAX_VALUE_NAME = 'CounterMaxValue'

export const CounterWithParams = (props: CounterWithParamsPropsType) => {
    useEffect(() => {
        const minString = localStorage.getItem(MIN_VALUE_NAME)
        const maxString = localStorage.getItem(MAX_VALUE_NAME)

        if (minString && maxString) {
            const minNumber = JSON.parse(minString)
            const maxNumber = JSON.parse(maxString)

            if (minNumber >= 0 && maxNumber > minNumber) {
                props.setCounterValue(minNumber)
                props.setMinValue(minNumber)
                props.setMaxValue(maxNumber)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(MIN_VALUE_NAME, JSON.stringify(props.minValue))
    }, [props.minValue])

    useEffect(() => {
        localStorage.setItem(MAX_VALUE_NAME, JSON.stringify(props.maxValue))
    }, [props.maxValue])

    return (
        <div className={s.main}>
            <CounterSettingsContainer/>
            <CounterContainer/>
        </div>
    )
}