import React, { useEffect } from 'react'
import CurrencyInput from './currencyInput'
import { LiaExchangeAltSolid } from 'react-icons/lia'

export default function Input() {
    useEffect(() => {
        doApi();
    })
    const doApi = async() => {
        const url = 'https://monkeys.co.il/api2/currency.php';
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
    }
    return (
        <div className=''>
            <h1 className='display-1 text-center'><span className='blinking-text'>Live</span> <br />Currency Exchange</h1>
            <div className='p-5 row justify-content-center'>
                <CurrencyInput/>
                <button className='btn col-1'><LiaExchangeAltSolid /></button>
                <CurrencyInput />
            </div>
        </div>
    )
}
