/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, {
  AndroidStyle,
  AndroidImportance,
  EventType,
} from '@notifee/react-native';
import {helpers} from './src/utility/helpers';

AppRegistry.registerComponent(appName, () => App);

// !Set up a handler for background and quit state notifications.
messaging().setBackgroundMessageHandler(async remoteMessage => {
  // console.log('Background or quit states message received:', remoteMessage);

  // Extract title, body, and image from the notification data
  const {title, body, image} = remoteMessage.data || {};
  const imageUrl = image || 'default_image_url'; // Fallback to a default image if none is provided

  // Display the notification using Notifee
  await notifee.displayNotification({
    title: title || 'Default Title',
    body: body || 'Default Body',
    android: {
      channelId: await createAndroidChannel(), // Ensure you have created the channel
      importance: AndroidImportance.HIGH,
      smallIcon: 'ic_launcher', // Use an appropriate small icon
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture: imageUrl, // Ensure this points to a valid image URL
      },
    },
    data: remoteMessage.data, // Pass additional data for navigation
  });

  // console.log('Notification data:', {title, body, imageUrl});
});

// Define the onBackgroundEvent method to handle notification taps in background/quit state
notifee.onBackgroundEvent(async ({type, detail}) => {
  if (type === EventType.PRESS) {
    console.log('Notification was pressed in background:', detail);

    if (!detail.notification?.data) {
      console.warn('No notification data found.');
      return;
    }

    helpers.onDisplayNotification(detail);
  }
});

const createAndroidChannel = async () => {
  const channelId = await notifee.createChannel({
    id: 'default', // Channel ID
    name: 'Default Channel', // Channel name
    importance: AndroidImportance.HIGH, // Channel importance
  });
  return channelId;
};
