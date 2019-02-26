import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushNotifications extends Component {
    componentDidMount() {
        PushNotification.configure({
            // (required) Called when a remote or local notification is opened or received
            onNotification(notification) {
                console.log('NOTIFICATION:', notification);

                // process the notification

                // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
                // notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
        });
    }

    render() {
        return null;
    }
}
