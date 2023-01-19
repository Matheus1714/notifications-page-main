import React from 'react';
import './CardMessage.css';

const CardMessage = params => {
    const username = params.username;
    const img = params.img;
    const messageResport = params.messageReport;
    const showAlertNotification = !params.readNotification;
    const message = params.message || "";
    const imgNotification = params.imgNotification || "";
    const lastTimeView = params.lastTimeView;


    const showReadIcon = (showAlertNotification) => {
        if(showAlertNotification){
            return <div className='BallIcon'></div>
        }
    }

    const showMessage = (message) => {
        if(!!message){
            return (
                <div className='message'>
                    <h2>{message}</h2>
                </div>
            )
        }
    }

    return (
        <div className={'CardMessage' + (showAlertNotification ? " colorNotification" : "")}>
            <div className='CardMessageLeft'>
                <div className='UserImg'>
                    <img src={img} id="iconUser"/>
                </div>
            </div>

            <div className='CardMessageRight'>

                <div className='ReportMessage'>
                    <div className='Username'>
                        <h2>{username}</h2>
                    </div>
                    <div className='MessageResport'>
                        <h2>{messageResport}</h2>
                    </div>
                    <div className='ReadMessageIcon'>
                        {showReadIcon(showAlertNotification)}
                    </div>
                </div>
                
                <div className='LastTimeView'>
                    <h2>{lastTimeView}</h2>
                </div>
            </div>

            <div hidden={!!!message} className='CardMessageBody'>
                {showMessage(message)}
            </div>
        </div>
    )
}

export default CardMessage;