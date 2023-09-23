import React, { useEffect, useRef, useState } from 'react'
import { LiaExchangeAltSolid } from 'react-icons/lia'

export default function Input(props) {
    const [currencyArr, setCurrency] = useState([]);
    const amountRef = useRef();
    const selectFrom = useRef();
    const selectTo = useRef();

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
                currency: key.substring(3), value: currencyObj[key]
            };
            tempArr.push(newObj);
        }
        setCurrency(tempArr);
    }

    const handleConvert = () => {
        let from;
        let to;
        for(var i = 0; i<selectFrom.current.options.length; i++){
            if(selectFrom.current.options[i].value === selectFrom.current.value){
                from = selectFrom.current.options[i].label;
            }
        }
        for(var i = 0; i<selectTo.current.options.length; i++){
            if(selectTo.current.options[i].value === selectTo.current.value){
                to = selectTo.current.options[i].label;
            }
        }
        const inputObj = {
            from: selectFrom.current.value,
            to: selectTo.current.value,
            fromLabel: from,
            toLabel: to,
            amount: amountRef.current.value
        }
        props.collectInput(inputObj);
    }
    return (<div className=''>
        <h1 className='display-1 text-center'><span className='blinking-text'>Live</span> <br />Currency Exchange
        </h1>
        <div className='input-container d-flex flex-column row justify-content-center'>
            <div className='amount-container mb-2'>
                <label>Amount</label>
                <input ref={amountRef} className='form-control border-dark' defaultValue={100} type="number" placeholder='100'></input>
            </div>
            <div className='align-items-end row justify-content-center'>
                <div className='select-container col-4'>
                    <label>From</label>
                    <select ref={selectFrom} className="form-select border-dark" aria-label="Default select example" id="currency" name="currency">
                        {currencyArr.map(item => {
                            return (<option key={item.value} value={item.value}>{item.currency}</option>)
                        })}
                    </select>
                </div>
                <button className='button mb-2 text-center col-1'><LiaExchangeAltSolid /></button>
                <div className='select-container col-4'>
                    <label>To</label>
                    <select ref={selectTo} className="form-select border-dark" aria-label="Default select example" id="currency" name="currency">
                        {currencyArr.map(item => {
                            return (<option key={item.value} value={item.value}>{item.currency}</option>)
                        })}
                    </select>
                </div>
            </div>
            <button onClick={handleConvert} className='convert-btn btn'>Convert</button>
        </div>
    </div>)
}
