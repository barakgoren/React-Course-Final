import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

export default function Score(props) {
    return (
        <div>
            <div className='p-5 row justify-content-center'>
                <p className='display-6 text-center pb-5'>100 dollar is</p>
                <p className='display-6 text-center'><FaArrowDown/></p>
                <p className='display-6 text-center p-5'>200 shekels</p>
            </div>
        </div>
    )
}