import React from 'react';
import CardMessage from './CardMessage';
import data from '../notifications.json';

const BodyMessage = () => {
    const {notifications} = data;

    const loadNotifications = (notifications) => {
        if(notifications.length !== 0){
            return notifications.map((notification, index) => {
                return <CardMessage 
                    username={notification.username}
                    messageReport={notification.notification}
                    img={notification.imgPath}
                    lastTimeView={notification.lastTimeView}
                    readNotification={notification.readNotification}
                    message={notification.message}
                    imgNotification={notification.imgNotification}
                    key={index}
                />
            });
        }
    }

    
    return (
        <div className='BodyMassage'>
            {loadNotifications(notifications)}
        </div>
    )
}

export default BodyMessage;