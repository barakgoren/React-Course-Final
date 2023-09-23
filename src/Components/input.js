import React, { useEffect, useRef, useState } from 'react'
import { LiaExchangeAltSolid } from 'react-icons/lia'

export default function Input(props) {
    const [currencyArr, setCurrency] = useState([]);
    const amountRef = useRef();
    const selectFrom = useRef();
    const selectTo = useRef();

    useEffect(() => {
        doApi();
        initInput();
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
    const initInput = () => {
        const initObj = {
            from: 1,
            to: 1,
            fromLabel: 'USD',
            toLabel: 'USD',
            amount: 100,
        }
        props.collectInput(initObj);
    }

    const getOptionsIndexs = () => {
        let listToReturn = [];
        for(var i = 0; i<selectFrom.current.options.length; i++){
            if(selectFrom.current.options[i].value === selectFrom.current.value){
                listToReturn.push(selectFrom.current.options[i].value);
            }
        }
        for(var j = 0; j<selectTo.current.options.length; j++){
            if(selectTo.current.options[j].value === selectTo.current.value){
                listToReturn.push(selectTo.current.options[j].value);
            }
        }
        return listToReturn;
    }
    const handleConvert = () => {
        let from;
        let to;
        for(var i = 0; i<selectFrom.current.options.length; i++){
            if(selectFrom.current.options[i].value === selectFrom.current.value){
                from = selectFrom.current.options[i].label;
            }
        }
        for(var j = 0; j<selectTo.current.options.length; j++){
            if(selectTo.current.options[j].value === selectTo.current.value){
                to = selectTo.current.options[j].label;
            }
        }
        const inputObj = {
            from: selectFrom.current.value,
            to: selectTo.current.value,
            fromLabel: from,
            toLabel: to,
            amount: amountRef.current.value,
        }
        props.collectInput(inputObj);
    }

    const handleSwitch = () => {
        let indexs = getOptionsIndexs();
        selectFrom.current.value = indexs[1];
        selectTo.current.value = indexs[0];
        handleConvert();
    }
    return (<div className=''>
        <h1 className='display-1 text-center'><span className='blinking-text'>Live</span> <br />Currency Exchange
        </h1>
        <div className='input-container d-flex flex-column row justify-content-center'>
            <div className='amount-container mb-2'>
                <label>Amount</label>
                <input onChange={handleConvert} ref={amountRef} className='amount form-control border-dark' defaultValue={100} type="number" placeholder='100'></input>
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
                <button onClick={handleSwitch} className='button mb-2 text-center col-1'><LiaExchangeAltSolid /></button>
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
