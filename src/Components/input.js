import React from 'react'
import CurrencyInput from './currencyInput'
import { LiaExchangeAltSolid } from 'react-icons/lia'

export default function Input() {
    return (
        <div className='row'>
            <h1 className='display-4 text-center'><span className='blinking-text'>Live</span> <br />Currency Exchange</h1>
            <div className='p-5 row justify-content-center'>
                <CurrencyInput />
                <button className='btn col-1'><LiaExchangeAltSolid /></button>
                <CurrencyInput />
            </div>
        </div>
    )
}
