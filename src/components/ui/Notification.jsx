import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { useNotification } from '../../context/NotificationContext';
import './Notification.css';

const Notification = () => {
    const { notification, hideNotification } = useNotification();

    if (!notification) return null;

    return (
        <div className={`notification-container ${notification.type}`}>
            <div className="notification-content">
                {notification.type === 'success' ? (
                    <CheckCircle className="notification-icon" size={20} />
                ) : (
                    <XCircle className="notification-icon" size={20} />
                )}
                <span className="notification-message">{notification.message}</span>
            </div>
            <button className="notification-close" onClick={hideNotification}>
                <X size={18} />
            </button>
        </div>
    );
};

export default Notification;
