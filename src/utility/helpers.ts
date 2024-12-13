
import { mainStackNavigationRef } from "../hook/navigationRef";

// !this created to re-direct the user to the notification Screen when the user will click on it 

const helpers = {
    onDisplayNotification: async (remoteMessage: any) => {
        console.log('onDisplayNotification remoteMessage: ', JSON.stringify(remoteMessage, undefined, 4));

        // Extract title, body, and image safely
        const { title = 'Default Title', body = 'Default Body', image = '' } = remoteMessage.notification?.data || {};

        if (mainStackNavigationRef.current?.isReady()) {
            mainStackNavigationRef.current.navigate('Notifications', {
                newNotification: { title, body, image },
            });
        } else {
            console.warn('Navigation reference is not ready.');
        }
    },
};

export { helpers };

