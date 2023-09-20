import React, { useRef } from 'react'

export default function CurrencyInput(props) {
    const newCurrency = useRef();
    const newCurrencyName = useRef();
    const currencies = props.currencies;
    const updatingCurrency = () => {
        if(props.side == "left"){
            props.updateFirstAmount(newCurrency.current.value);
        }
        if(props.side == "right"){
            props.updateSecAmount(newCurrency.current.value);
        }
        
    }
    const updatingCurName = () => {
        let objToSend = {};
        for(let i = 0; i < newCurrencyName.current.length; i++){
            if(newCurrencyName.current[i].value == newCurrencyName.current.value){
                objToSend = {
                    label:newCurrencyName.current[i].label,
                    val:newCurrencyName.current[i].value
                };
            }
        }
        if(props.side == "left"){
            props.updateFirstCur(objToSend.label);
        }
        if(props.side == "right"){
        }
    }
    return (
        <div className='currency-input'>
            <div className='row'>
                <input onChange={updatingCurrency} ref={newCurrency} className='form-control w-75 border-dark' defaultValue={100} type="number" placeholder='100'></input>
                <select onChange={updatingCurName} ref={newCurrencyName} className="form-select w-25 border-dark" aria-label="Default select example" id="currency" name="currency">
                    {currencies.map(item => {
                        return(
                            <option key={item.value} value={item.value}>{item.currency}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}
