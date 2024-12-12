import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

interface Notification {
  title: string;
  body: string;
}

const NotificationScreen = ({route}: any) => {
  // State to hold notifications
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Check if there is new notification data from route params
  useEffect(() => {
    if (route.params?.newNotification) {
      setNotifications(prev => [...prev, route.params.newNotification]);
    }
  }, [route.params?.newNotification]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {notifications.length === 0 ? (
          <Text style={styles.description}>
            You have no new notifications at the moment. Check back later!
          </Text>
        ) : (
          notifications.map((notification, index) => (
            <View key={index} style={styles.card}>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#888',
  },
  scrollView: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  cardBody: {
    fontSize: 14,
    color: '#555',
  },
});

export default NotificationScreen;
