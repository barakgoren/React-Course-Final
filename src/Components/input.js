import React, { useEffect, useState } from 'react'
import CurrencyInput from './currencyInput'
import { LiaExchangeAltSolid } from 'react-icons/lia'

export default function Input(props) {
    const [currencyArr, setCurrency] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        const url = 'https://monkeys.co.il/api2/currency.php';
        const resp = await fetch(url);
        const data = await resp.json();
        const currencyObj = data.quotes;
        let tempArr = [];
        for (let key in currencyObj) {
            let newObj = {
                currency: key.substring(3),
                value: currencyObj[key]
            };
            tempArr.push(newObj);
        }
        setCurrency(tempArr);
    }

    return (
        <div className=''>
            <h1 className='display-1 text-center'><span className='blinking-text'>Live</span> <br />Currency Exchange</h1>
            <div className='p-5 row justify-content-center'>
                {/* <CurrencyInput side={"left"} updateFirstAmount={props.updateFirstAmount} updateFirstCur={props.updateFirstCur} currencies={currencyArr}/> */}
                <div className='currency-input'>
                    <div className='row'>
                        <input className='form-control w-75 border-dark' defaultValue={100} type="number" placeholder='100'></input>
                        <select className="form-select w-25 border-dark" aria-label="Default select example" id="currency" name="currency">
                            {currencyArr.map(item => {
                                return (
                                    <option key={item.value} value={item.value}>{item.currency}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <button className='btn col-1'><LiaExchangeAltSolid /></button>
                {/* <CurrencyInput side={"right"} updateSecAmount={props.updateSecAmount} currencies={currencyArr}/> */}
                <div className='currency-input'>
                    <div className='row'>
                        <input className='form-control w-75 border-dark' defaultValue={100} type="number" placeholder='100'></input>
                        <select className="form-select w-25 border-dark" aria-label="Default select example" id="currency" name="currency">
                            {currencyArr.map(item => {
                                return (
                                    <option key={item.value} value={item.value}>{item.currency}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
