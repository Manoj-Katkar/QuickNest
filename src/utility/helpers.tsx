import {Linking} from 'react-native';
import {mainStackNavigationRef} from '../hook/navigationRef';
import notifee, {AndroidImportance, AndroidStyle} from '@notifee/react-native';
import LoadingFallback from '../components/loading-fallback';
import React from 'react';

// !this created to re-direct the user to the notification Screen when the user will click on it

const helpers = {
  onDisplayNotification: async (remoteMessage: any) => {
    //navigateThroughFCM
    try {
      // Extract title, body, and image safely
      const {
        title = 'Default Title',
        bodyText = 'Default Body',
        image = '',
        day = 0,
      } = remoteMessage.data || {};

      if (mainStackNavigationRef.current?.isReady()) {
        mainStackNavigationRef.current?.navigate('Notifications', {
          newNotification: {title, bodyText, image, day},
        });
      }
    } catch (error) {
      console.log('error : ', error);
    }
  },

  displayNotification: async function (remoteMessage: any) {
    const {title, body} = remoteMessage.data || {};

    await notifee.displayNotification({
      title: title || 'Default Title',
      body: body || 'Default Body',
      android: {
        channelId: 'QuickNest',
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'defalult',
          launchActivity: 'com.quicknest.MainActivity', // <-- here you can add the package name of your app
        },
        smallIcon: 'ic_launcher', // Ensure you have an appropriate small icon in your app (this will display the by-default icon of the app)
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://gammingle-admin-file-s3.s3.ap-south-1.amazonaws.com/default/contestWin.png',
        },
      },
      data: remoteMessage.data,
    });
  },

  LazyLoad: <T extends object>(
    importFn: () => Promise<{default: React.ComponentType<T>}>,
  ): React.FC<T> => {
    const LazyComponent = React.lazy(importFn);

    return (props: any) => (
      <React.Suspense fallback={<LoadingFallback />}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  },
};

export {helpers};
