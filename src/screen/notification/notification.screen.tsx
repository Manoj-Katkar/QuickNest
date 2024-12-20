import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';

interface Notification {
  title: string;
  body: string;
  image: string;
}

const NotificationScreen = ({route}: any) => {
  // State to hold notifications
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Update notifications when a new notification is passed through route params
  useEffect(() => {
    if (route.params?.newNotification) {
      setNotifications(prev => [...prev, route.params.newNotification]);
    }
  }, [route.params?.newNotification]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Notifications</Text> */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {notifications.length === 0 ? (
          <Text style={styles.description}>
            You have no new notifications at the moment. Check back later!
          </Text>
        ) : (
          notifications.map((notification, index) => (
            <View key={index} style={styles.card}>
              {/* Display notification image if available */}
              {notification.image && (
                <FastImage
                  source={{uri: notification.image}}
                  style={styles.notificationImage}
                />
              )}
              {/* Display notification title and body */}
              <Text style={styles.cardTitle}>{notification.title}</Text>
              <Text style={styles.cardBody}>{notification.body}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background for better readability
  },
  title: {
    fontSize: 24, // Reduced font size for title
    fontWeight: 'bold',
    marginBottom: 15, // Reduced margin bottom
    color: '#333',
    textAlign: 'center', // Center-align title
  },
  description: {
    fontSize: 14, // Reduced font size
    color: '#888',
    textAlign: 'center',
    marginTop: 30, // Reduced top margin
  },
  scrollView: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15, // Reduced padding
    marginVertical: 8, // Reduced margin
    borderRadius: 8, // Slightly smaller border radius
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4, // Reduced shadow radius
    elevation: 3, // Reduced elevation
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light border for separation
  },
  notificationImage: {
    width: '100%',
    height: 130, // Reduced height for image
    borderRadius: 8, // Smaller border radius
    marginBottom: 12, // Reduced bottom margin
  },
  cardTitle: {
    fontSize: 15, // Reduced font size
    fontWeight: 'bold',
    marginBottom: 8, // Reduced margin bottom
    color: '#333',
    textAlign: 'center',
  },
  cardBody: {
    fontSize: 12, // Reduced font size
    color: '#555',
    textAlign: 'center',
  },
});

export default NotificationScreen;
