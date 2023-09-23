import React, { useEffect, useState } from 'react'
import Input from './input'
import Score from './score'

export default function ExchangeApp() {
    const [inputObj, setInput] = useState({});
    const collectInput = (input) => {
        setInput(input);
    }
  return (
    <div className='container'>
        <Input collectInput={collectInput}/>
        <hr/>
        <Score input={inputObj}/>
    </div>
  )
}