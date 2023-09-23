import React, { useEffect, useState } from 'react'
import Input from './input'
import Score from './score'

export default function ExchangeApp() {
  return (
    <div className='container'>
        <Input/>
        <hr/>
        <Score/>
    </div>
  )
}