/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {helpers} from './src/utility/helpers';

notifee.createChannel({
  id: 'QuickNest', // Channel ID
  name: 'Default Channel', // Channel name
  importance: AndroidImportance.HIGH, // Channel importance
});

notifee.onBackgroundEvent(async ({type, detail}) => {
  switch (type) {
    case EventType.DELIVERED:
      break;
    case EventType.PRESS:
      helpers.onDisplayNotification(detail.notification);
      break;
    default:
      return true;
  }
});

notifee.onForegroundEvent(async ({type, detail}) => {
  switch (type) {
    case EventType.DELIVERED:
      break;
    case EventType.PRESS:
      helpers.onDisplayNotification(detail.notification);
      break;
    default:
      return true;
  }
});

// !Set up a handler for background and kill state notifications.
messaging().setBackgroundMessageHandler(async remoteMessage => {
  if (!remoteMessage) return;
  helpers.displayNotification(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
