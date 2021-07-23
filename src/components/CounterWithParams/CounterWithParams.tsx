import React from 'react';
import s from './CounterWithParams.module.css'
import {CounterSettingsContainer} from '../CounterSettings/CounterSettingsContainer';
import {CounterContainer} from '../Counter/CounterContainer';


export const CounterWithParams = () => {
    return (
        <div className={s.main}>
            <CounterSettingsContainer/>
            <CounterContainer/>
        </div>
    )
}