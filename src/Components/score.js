import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

export default function Score(props) {
    const input = props.input;
    return (
        <div>
            <div className='p-5 row justify-content-center'>
                <p className='display-6 text-center pb-5'>{input.amount} {input.fromLabel}</p>
                <p className='display-6 text-center'><FaArrowDown/></p>
                <p className='display-6 text-center p-5'>{(input.to*input.amount).toFixed(2)} {input.toLabel}</p>
            </div>
        </div>
    )
}
