import React from 'react';

const NotificationCounter = param => {
    const numberOfNotifications = param.numberOfNotifications;
    return (
        <div className='NotificationCounter'>
            <h1>{numberOfNotifications}</h1>
        </div>
    )
}

export default NotificationCounter;