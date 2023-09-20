import React, { useEffect, useState } from 'react'
import Input from './input'
import Score from './score'

export default function ExchangeApp() {
    const [firstAmount, setFirstAmount] = useState(100);
    const [secAmount, setSecAmount] = useState(100);
    const [currencyLeft, setCurrencyLeft] = useState("USD");
    const [currencyRight, setCurrencyRight] = useState("USD");

    const leftCurrency = {
        currency:currencyLeft,
        value:firstAmount
    };
    const rightCurrency = {
        currency:currencyRight,
        value:secAmount
    };
    const updateFirstAmount = (newResults) => {
        setFirstAmount(newResults);
    };
    const updateSecAmount = (newResults) => {
        setSecAmount(newResults);
    };
    const updateFirstCur = (newCur) => {
        setCurrencyLeft(newCur);
    }
  return (
    <div className='container'>
        <Input updateFirstCur={updateFirstCur} updateSecAmount={updateSecAmount} updateFirstAmount={updateFirstAmount}/>
        <hr/>
        <Score firstAmount={leftCurrency} secAmount={rightCurrency}/>
    </div>
  )
}
