import React, { useState, useEffect } from 'react';
import './notification.scss';

const Notification = () => {
   const [showNotification, setShowNotification] = useState(true);

   useEffect(() => {
      const isNotificationClosed = localStorage.getItem('notificationClosed');
      if (isNotificationClosed) {
         setShowNotification(false);
      }
   }, []);

   const handleCloseNotification = () => {
      localStorage.setItem('notificationClosed', 'true');
      setShowNotification(false);
   };

   return (
      <>
         {showNotification && (
            <div className="notification">
               <div className="notification__content">
                  <p>
                     GitHub:{' '}
                     <a href="https://github.com/timazloy/react-headphones" target="_blank">
                        https://github.com/timazloy/react-headphones
                     </a>
                  </p>
                  <button className="notification__button" onClick={handleCloseNotification}>
                     Ok
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default Notification;
