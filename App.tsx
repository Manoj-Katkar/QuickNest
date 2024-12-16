import React, {useEffect} from 'react';
import DrawerNav, {DrawerNavScreens} from './src/components/drawer-nav';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HouseServices from './src/screen/house-services/house-services.screen';
import {Linking, Platform, StatusBar} from 'react-native';
import Details from './src/screen/details/details.screen';
import NotificationScreen from './src/screen/notification/notification.screen';
import {mainStackNavigationRef} from './src/hook/navigationRef';
import messaging from '@react-native-firebase/messaging';
import {helpers} from './src/utility/helpers';
import notifee from '@notifee/react-native';
// const Stack = createNativeStackNavigator<{ DrawerNav: DrawerNavScreens }>()

// Update the type definition to include both screens
export type RootStackParamList = {
  DrawerNav: DrawerNavScreens;
  House_Services: undefined; // Adjust the params if `House_Services` takes any
  Details: undefined;
  Notifications: {
    newNotification: {title: string; body: string; image: string};
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const getInitialNotification = async () => {
  const remoteMessage = await notifee.getInitialNotification();

  console.log(
    'remote message from getInitialNotification : =====',
    remoteMessage,
  );

  if (remoteMessage) {
    const {title, body, image} = remoteMessage.notification.data || {};
    // Navigate to the Notifications screen with parameters
    helpers.onDisplayNotification(remoteMessage);
  }
};

const getInitialUrl = async () => {
  const url = await Linking.getInitialURL();

  if (url) {
    // then
    console.log('url ============', url);
  }
};

// ^ here I have to add the logic of the deep linking
const linking = {
  prefixes: ['QuickNest://'], // Use your app's scheme
  config: {
    screens: {
      Notifications: {
        path: 'Notifications',
        parse: {
          title: (title: string) => decodeURIComponent(title),
          body: (body: string) => decodeURIComponent(body),
          image: (image: string) => decodeURIComponent(image),
        },
      },
    },
  },
};

const App = () => {
  useEffect(() => {}, []);

  return (
    <NavigationContainer
      // Attach the navigation reference to allow programmatic navigation.
      ref={mainStackNavigationRef}
      // Callback executed when the navigation container is fully initialized.
      // onReady={() => {
      //   console.log('Navigation is ready.');

      //   // Listen for notifications when the app is opened from the background.
      //   messaging().onNotificationOpenedApp(message => {
      //     // Handle notification click and navigate to the appropriate screen.
      //     // helpers.onDisplayNotification(message);
      //   });

      //   // getInitialUrl(); //!to get the initial url

      //   // Handle the scenario where the app is opened via a notification from a quit state.
      //   // getInitialNotification();
      // }}
      // & giving the linking part
      linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
        <Stack.Screen name="House_Services" component={HouseServices} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={
            {
              // headerShown:true
            }
          }
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            headerShown: true, // Ensures the default header is displayed
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
