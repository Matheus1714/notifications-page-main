import React from 'react';
import './CardMessage.css';

const CardMessage = params => {
    const username = params.username;
    const img = params.img;
    const messageResport = params.messageReport;
    const hasReadMessage = params.hasReadMessage || false;

    const addReadIcon = (hasReadMessage) => {
        if(hasReadMessage){
            return (
                <div className='ReadMessageIcon'>
                </div>
            )
        }
    }

    return (
        <div className='CardMessage'>
            <div className='CardMessageLeft'>
                <div className='UserImg'>
                    <img src={img}/>
                </div>
            </div>

            <div className='CardMessageRight'>
                <div className='Username'>
                    <h2>{username}</h2>
                </div>
                <div className='MessageResport'>
                    <h2>{messageResport}</h2>
                </div>
                <div className='ReadMessageIcon'>

                </div>

                {/* {hasReadMessage(hasReadMessage)} */}
            </div>
        </div>
    )
}

export default CardMessage;