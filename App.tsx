import React, {lazy, useEffect, useState} from 'react';
import {DrawerNavScreens} from './src/components/drawer-nav';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mainStackNavigationRef} from './src/hook/navigationRef';
import messaging from '@react-native-firebase/messaging';
import {helpers} from './src/utility/helpers';
import notifee from '@notifee/react-native';
import {
  useFCMToken,
  useNotificationPermission,
} from './src/hook/useNotificationPermission';
import {StatusBar} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import {screens} from './src/components/LazyComponent';
import UserContextProvider from './src/contextApi/userContextProvider';

// Update the type definition to include both screens
export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Otp: undefined;
  DrawerNav: DrawerNavScreens;
  House_Services: undefined; // Adjust the params if `House_Services` takes any
  Details: undefined;
  Notifications: {
    newNotification: {title: string; body: string; image: string};
  };
  Concern: undefined;
  HouseHoldMember: undefined;
  PaymentSuccessful: undefined;
  PaymentUnsuccessful: undefined;
  NoInternet: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Dynamically import a component using lazy
// const LazyComponent = lazy(() => import('./'));

const App = () => {
  const {requestPermission, hasPermission} = useNotificationPermission();
  // const [routeName, setRouteName] = useState('Onboarding');

  // const screensArray = ['HouseHoldMember'];

  // const setTranslucent = (routeName: string) => {
  //   if (screensArray.includes(routeName)) {
  //     return true;
  //   }
  //   return false;
  // };

  // const getBackground = (routeName: string) => {
  //   if (setTranslucent(routeName)) {
  //     return 'transparent';
  //   }
  //   return Colors.white;
  // };

  //         // translucent
  // backgroundColor={getBackground(routeName)}

  const fcmToken = useFCMToken(hasPermission);

  console.log('fcmToken : ', fcmToken);

  // Requesting notification permissions
  useEffect(() => {
    crashlytics().log('App mounted.');
    // Force a crash
    // crashlytics().recordError(new Error('Test error'));
    // throw new Error('Forced crash for testing');
    requestPermission();
  }, []);

  // Handle foreground notifications using Firebase and Notifee
  useEffect(() => {
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      if (!remoteMessage) return;

      await helpers.displayNotification(remoteMessage); // Display the notification in the foreground
    });

    return () => {
      unsubscribeForeground(); // Clean up the listener on component unmount
    };
  }, []);

  // Handle notifications when the app is opened from the killed state
  const getNotification = async () => {
    const remoteMessage = await notifee.getInitialNotification();

    if (remoteMessage) {
      helpers.onDisplayNotification(remoteMessage.notification); //
    }
  };

  // Check for notification when the app starts
  useEffect(() => {
    getNotification();
  }, []);

  return (
    <UserContextProvider>
      <StatusBar backgroundColor="#fafafa" barStyle="light-content" />
      <NavigationContainer
        ref={mainStackNavigationRef}
        // onStateChange={async state => {
        //   const currentRoute = state?.routes[state?.index];
        //   setRouteName(currentRoute?.name!);
        // }}
      >
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={screens.Onboarding} />
          <Stack.Screen name="Login" component={screens.Login} />
          <Stack.Screen name="Otp" component={screens.Otp} />
          <Stack.Screen name="DrawerNav" component={screens.DrawerNav} />
          <Stack.Screen name="Concern" component={screens.Concern} />
          <Stack.Screen
            name="House_Services"
            component={screens.HouseServices}
          />
          <Stack.Screen
            name="Details"
            component={screens.Details}
            options={
              {
                // headerShown:true
              }
            }
          />
          <Stack.Screen
            name="Notifications"
            component={screens.NotificationScreen}
            options={{
              headerShown: true, // Ensures the default header is displayed
            }}
          />

          <Stack.Screen
            name="HouseHoldMember"
            component={screens.HouseHoldMember}
          />

          <Stack.Screen
            name="PaymentSuccessful"
            component={screens.PaymentSuccessful}
          />

          <Stack.Screen
            name="PaymentUnsuccessful"
            component={screens.PaymentUnsuccessful}
          />
          <Stack.Screen name="NoInternet" component={screens.NoInternet} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
};
export default App;
