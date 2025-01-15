import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomHeader from '../../components/header-comp';
import NotificationIcon from '../../../assets/icons/NotificationIcon';
import {FlatList} from 'react-native-gesture-handler';

type NotificationDetail = {
  title: string;
  bodyText: string;
  image: JSX.Element; //beuacse here I am taking the static image right now
  timeDuration: string;
};

type NotificationGroup = {
  id: number;
  day: string;
  notifications: NotificationDetail[];
};

const notificationArray: NotificationGroup[] = [
  {
    id: 1,
    day: 'Today',
    notifications: [
      {
        title: 'Subscription Update',
        bodyText:
          'Your annual subscription has been successfully \nrenewed. Thank you for staying with us!',
        image: <NotificationIcon />,
        timeDuration: '10 min ago',
      },
      {
        title: 'Family member added',
        bodyText:
          'Your annual subscription has been successfully \nrenewed. Thank you for staying with us!',
        image: <NotificationIcon />,
        timeDuration: '45 min',
      },
      {
        title: 'Panic Situation Update',
        bodyText:
          'Your annual subscription has been successfully \nrenewed. Thank you for staying with us!',
        image: <NotificationIcon />,
        timeDuration: '2h ago',
      },
      {
        title: 'Family member added',
        bodyText:
          'Your annual subscription has been successfully \nrenewed. Thank you for staying with us!',
        image: <NotificationIcon />,
        timeDuration: '2.5h ago',
      },
    ],
  },
  {
    id: 2,
    day: 'Yesterday',
    notifications: [
      {
        title: 'Subscription Update',
        bodyText:
          'Your annual subscription has been successfully \nrenewed. Thank you for staying with us!',
        image: <NotificationIcon />,
        timeDuration: '10 min ago',
      },
      {
        title: 'Family member added',
        bodyText:
          'Your annual subscription has been successfully \nrenewed. Thank you for staying with us!',
        image: <NotificationIcon />,
        timeDuration: '45 min',
      },
      {
        title: 'Panic Situation Update',
        bodyText:
          'Your annual subscription has been successfully \nrenewed. Thank you for staying with us!',
        image: <NotificationIcon />,
        timeDuration: '2h ago',
      },
      {
        title: 'Family member added',
        bodyText:
          'Your annual subscription has been successfully \nrenewed. Thank you for staying with us!',
        image: <NotificationIcon />,
        timeDuration: '3h ago',
      },
    ],
  },
];

const NotificationScreen = ({navigation}: any) => {
  const [notificationsData, setNotificationsData] = useState<
    NotificationGroup[]
  >([]);

  useEffect(() => {
    setNotificationsData(notificationArray);
  }, []);

  const renderNotification = ({item}: {item: NotificationDetail}) => (
    <View style={styles.notificationItem}>
      <View style={styles.imageContainer}>{item.image}</View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.bodyText}>{item.bodyText}</Text>
        <Text style={styles.timeText}>{item.timeDuration}</Text>
      </View>
    </View>
  );

  const renderDayGroup = ({item}: {item: NotificationGroup}) => (
    <View style={styles.dayGroup}>
      <Text style={styles.dayText}>{item.day}</Text>
      <FlatList
        data={item.notifications}
        renderItem={renderNotification}
        keyExtractor={(notification, index) => index.toString()}
        nestedScrollEnabled
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <CustomHeader headerText="Notifications" navigation={navigation} />
      <ScrollView horizontal contentContainerStyle={{width: '100%'}}>
        <FlatList
          data={notificationsData}
          renderItem={renderDayGroup}
          keyExtractor={item => item.id.toString()}
          nestedScrollEnabled
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    // backgroundColor: 'yellow',
  },
  dayGroup: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  dayText: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
    marginBottom: 8,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 8,
    // marginBottom: 8,
  },
  imageContainer: {
    marginRight: 12,
    // backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2B2B2B1A',
    // position: 'absolute',
    position: 'relative',
    top: -10,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    color: '#2B2B2B',
  },
  bodyText: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
    marginVertical: 4,
  },
  timeText: {
    fontSize: 10,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B40',
    alignSelf: 'flex-end',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#2B2B2B1A',
  },
});

export default NotificationScreen;
