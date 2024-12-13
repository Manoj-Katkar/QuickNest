import {View, StatusBar, FlatList, Alert} from 'react-native';
import React, {useEffect} from 'react';
import Header from './components/Header';
import Verification from './components/Verification';
import Contacts from './components/Contacts';
import Protect from './components/Protect';
import SafeTip from './components/SafeTip';
import QuickGuide from './components/QuickGuide';
import CommingSoon from './components/CommingSoon';
import TradeMark from './components/TradeMark';
import GetInTouch from './components/GetInTouch';
import TakeSpace from '../../components/take-space';
import RedirectNotification from './components/redirect-notification';
import messaging from '@react-native-firebase/messaging';
import {useNotificationPermission} from '../../hook/useNotificationPermission';
import notifee, {
  AndroidImportance,
  EventType,
  AndroidStyle,
} from '@notifee/react-native';

const Home = ({navigation}: any) => {
  // ^ here for creaing the token that will be unique for that device logic to send the notification to the all the users in all 3 stages
  const {requestPermission, hasPermission} = useNotificationPermission();

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('token =======', token);
  };

  const helpers = {
    onDisplayNotification: async (remoteMessage: any) => {
      // console.log('Displaying notification:', remoteMessage);
      // console.log('remoteMessage.data ======== :', remoteMessage.data);

      //* here logic to display notification if needed (logic I have to write it over here)

      // Extract title and body from the notification
      const {title, body, image} = remoteMessage.data;
      // const title = remoteMessage.data.title;
      // const body = remoteMessage.data.body;

      // *Navigate to NotificationScreen with the new notification data
      navigation.navigate('Notifications', {
        newNotification: {title, body, image},
      });
    },
  };

  // now I wanted the token at the first time when the componenet get-render for that you have to use the useEffect
  useEffect(() => {
    requestPermission();

    if (hasPermission) {
      getToken();
      console.log('hasPermission : ', hasPermission); //!I am getting the false value over here
    }
  }, []);

  console.log('hasPermission : ', hasPermission); //!I am getting the differant value here

  // !============================= code for Forground stage of the notification ================================
  useEffect(() => {
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      if (!remoteMessage) return;
      // console.log(
      //   'Message handled in the Forground! Stage In Home Screen',
      //   remoteMessage, // ^ this is the object where I am getting the everything
      // );
      // helpers.onDisplayNotification(remoteMessage);

      // !here I have to implement the third part library to display that notification in the forground stage also using the notifee
      // ^I have to explicitlly show the notification to user beacsue it is not getting shown automatically
      // ^Display notification explicitly
      await displayNotification(remoteMessage);
    });

    // Handle notification tap events
    const unsubscribeNotifee = notifee.onForegroundEvent(({type, detail}) => {
      if (type === EventType.PRESS) {
        //console.log('Notification tapped:', detail.notification); //this is entire payload that I am getting from the backend
        handleNotificationTap(detail.notification); //then passing that entire payload so it will take specific content that it needed to display in notification
      }
    });

    //this will work at the un-mounting stage of the component
    return () => {
      unsubscribeForeground();
      unsubscribeNotifee();
    };
  }, []);

  // Function to display the notification using Notifee
  async function displayNotification(remoteMessage: any) {
    const {title, body} = remoteMessage.data || {};

    await notifee.displayNotification({
      title: title || 'Default Title',
      body: body || 'Default Body',
      android: {
        channelId: await createAndroidChannel(),
        importance: AndroidImportance.HIGH,
        smallIcon: 'ic_launcher', // Ensure you have an appropriate small icon in your app (this will display the by-default icon of the app)
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://gammingle-admin-file-s3.s3.ap-south-1.amazonaws.com/default/contestWin.png',
        },
      },
      data: remoteMessage.data, // Pass additional data for navigation
    });
  }

  // Create an Android notification channel
  async function createAndroidChannel() {
    return notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });
  }

  // Handle notification taps and navigate
  function handleNotificationTap(remoteMessage: any) {
    const {title, body, image} = remoteMessage.data || {};

    console.log('handleNotificationTap image url  : ', image);

    // Navigate to the Notifications screen with parameters
    navigation.navigate('Notifications', {
      newNotification: {title, body, image},
    });
  }

  // ^now event handlers of the differant stages that is Foreground , background and kill

  // Note: An async function or a function that returns a Promise is required for both subscribers.

  // This function will handle messages received while the app is in the foreground.
  async function onMessageReceived(remoteMessage: any) {
    // This is triggered when a notification is received while the app is in the foreground.

    // console.log('Foreground message received:', remoteMessage);

    // console.log(
    //   'remoteMessage.originalPriority : ',
    //   remoteMessage.originalPriority,
    // );

    const {title, body, image} = remoteMessage.data || {};

    // console.log('remoteMessage.data.imageURl  : ', image);

    // Alert.alert('A new FCM message arrived!', remoteMessage);  //* took for the understanding purpose
  }

  // Subscribe to foreground notifications.
  messaging().onMessage(onMessageReceived);

  //^ now to handle the kill stage (when the app is closed)

  //! code for the killed stage
  useEffect(() => {
    const checkInitialNotification = async () => {
      try {
        // Check if the app was launched due to a notification
        const remoteMessage = await messaging().getInitialNotification();
        if (remoteMessage) {
          // console.log('App launched from notification:', remoteMessage);

          // Extract title and body from the notification
          const {title, body, image} = remoteMessage.data || {};

          if (title && body) {
            // Redirect to the NotificationScreen with the notification data
            navigation.navigate('Notifications', {
              newNotification: {title, body, image},
            });
          }
        }
      } catch (error) {
        console.error('Error handling initial notification:', error);
      }
    };

    checkInitialNotification();
  }, []);

  //!home related UI part will come here

  const renderHome = () => {
    return (
      <View style={{backgroundColor: '#fafafa'}}>
        <Verification />
        <Contacts />
        <Protect />
        <SafeTip />
        <QuickGuide />
        <TakeSpace space={10} />
        <CommingSoon nav={navigation} />
        <GetInTouch />
        {/* Customizing the StatusBar */}
        <StatusBar backgroundColor="#fafafa" barStyle="light-content" />
        <TakeSpace space={10} />
        <TakeSpace space={10} />
        <RedirectNotification nav={navigation} />
        <TakeSpace space={50} />
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={[1]}
        contentContainerStyle={{backgroundColor: '#fafafa', flexGrow: 1}}
        ListHeaderComponent={() => <Header nav={navigation} />}
        ListHeaderComponentStyle={{backgroundColor: '#fafafa'}}
        ListFooterComponent={() => <TradeMark />}
        ListFooterComponentStyle={{paddingBottom: 50}}
        renderItem={renderHome}
      />
    </>
  );
};

export default Home;
