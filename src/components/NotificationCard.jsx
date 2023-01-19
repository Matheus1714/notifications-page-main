import React from 'react';
import BodyMessage from './BodyMessage';
import HeaderNotification from './HeaderNotification';
import './NotificationCard.css';

const NotificationCard = () => {
    return (
        <div className='NotificationCard'>
            <HeaderNotification/>
            <BodyMessage/>
        </div>
    )
}

export default NotificationCard;