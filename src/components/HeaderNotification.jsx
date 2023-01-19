import React from 'react';
import NotificationCounter from './NotificationCounter';
import './HeaderNotification.css';

const HeaderNotification = () => {
    return (
        <div className='HeaderNotification'>
            <div className='HeaderNotificationLeft'>
                <h1>Notifications</h1>
                <NotificationCounter numberOfNotifications = {3} />
            </div>
            <div className='HeaderNotificationRight'>
                <div>
                    <p>Mark all as Read</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderNotification;