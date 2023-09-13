import React from 'react'
import { MDBInput } from 'mdbreact';

export default function InputComp() {
    return (
        <div className='input'>
            <div>
                <MDBInput
                    label="Your Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                />
                {/* Add more MDBInput components or other form elements as needed */}
            </div>
            <button className='convert-btn btn w-100'>Convert</button>
        </div>
    );
}
