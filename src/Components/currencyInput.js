import React from 'react'

export default function CurrencyInput() {
    return (
        <div className='currency-input'>
            <div className='row'>
                <input className='form-control w-75 border-dark' type="number" placeholder='100'></input>
                <select className="form-select w-25 border-dark" aria-label="Default select example" id="currency" name="currency">
                    <option value="USD">USD</option>
                    <option value="EUR">ILS</option>
                    <option value="GBP">EUR</option>
                    <option value="THB">BTC</option>
                </select>
            </div>
        </div>
    )
}
