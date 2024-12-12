import { mainStackNavigationRef } from "../hook/navigationRef";

// !this created to re-direct the user to the notification Screen when the user will click on it 
const helpers = {
    onDisplayNotification: async (remoteMessage: any) => {
        console.log('Displaying notification:', remoteMessage);
        console.log('remoteMessage.data ======== :', remoteMessage.data);

        //* here logic to display notification if needed (logic I have to write it over here)

        // Extract title and body from the notification
        const { title, body, image } = remoteMessage.data;

        // *Navigate to NotificationScreen with the new notification data
        mainStackNavigationRef.current?.navigate('Notifications', {
            newNotification: { title, body, image },
        });
    },
};

export { helpers }
