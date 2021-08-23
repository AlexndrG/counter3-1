import React from 'react';
import s from './CounterWithParams.module.css'
import {Counter} from '../Counter/Counter';
import {CounterSettings} from '../CounterSettings/CounterSettings';


export const CounterWithParams = () => {
    return (
        <div className={s.main}>
            <CounterSettings/>
            <Counter/>
        </div>
    )
}