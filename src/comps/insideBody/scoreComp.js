import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function ScoreComp() {
    return (
        <div className='score'>
            <div className='score-display'>
                3.5
            </div>
            USD <AiOutlineArrowRight /> ILS
        </div>
    )
}
