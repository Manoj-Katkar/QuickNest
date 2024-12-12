/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import helpers from './src/utility/helpers';
AppRegistry.registerComponent(appName, () => App);

// !Set up a handler for background and quit state notifications.
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Background or quit states message received:', remoteMessage);

  // Extract title and body from the notification
  const {title, body, image} = remoteMessage.data;

  // Example: Save the notification to local storage for later use or navigate to a screen if required
  console.log('Notification data:', {title, body, image});
});
