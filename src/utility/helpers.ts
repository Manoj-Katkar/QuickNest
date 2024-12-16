
import { Linking } from "react-native";
import { mainStackNavigationRef } from "../hook/navigationRef";

// !this created to re-direct the user to the notification Screen when the user will click on it 

const helpers = {
    onDisplayNotification: async (remoteMessage: any) => {
        console.log('remoteMessage from helpers ---------------------- : ', JSON.stringify(remoteMessage, undefined, 4));

        try {
            // Extract title, body, and image safely
            const { title = 'Default Title', body = 'Default Body', image = '' } = remoteMessage.data || {};


            if (mainStackNavigationRef.current?.isReady()) {
                mainStackNavigationRef.current?.navigate('Notifications', {
                    newNotification: { title, body, image },
                });
            }
        }
        catch (error) {
            console.log("error : ", error);

        }


        // Construct a deep link
        // const deepLink = `QuickNest://notification?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&image=${encodeURIComponent(image)}`;

        // try {
        //     // Open the deep link
        //     await Linking.openURL(deepLink);
        // } catch (err) {
        //     console.error('Failed to open deep link: ', err);
        // }



    },
};

export { helpers };

