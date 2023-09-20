import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

export default function Score(props) {
    const amountToExchange = props.firstAmount;
    const amountResult = props.secAmount;
    return (
        <div>
            <div className='p-5 row justify-content-center'>
                <p className='display-6 text-center pb-5'>{amountToExchange.value} {amountToExchange.currency} is</p>
                <p className='display-6 text-center'><FaArrowDown/></p>
                <p className='display-6 text-center p-5'>{amountResult.value} {amountResult.currency} is</p>
            </div>
        </div>
    )
}
