import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('window');

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const Pagination = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?page=${pageNo}&results=10&seed=abc`,
      );
      const newUsers = response.data.results;
      setUsersData(prevData => [...prevData, ...newUsers]);
      setPageNo(prevPage => prevPage + 1); //^ then after the first page I am updating the page no 2 and accordinglly
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log('usersData : ', usersData);

  const renderEachUser = useCallback(
    ({item}: any) => {
      return (
        <View style={styles.userCard}>
          <FastImage
            source={{
              uri: item.picture.large,
              priority: FastImage.priority.high, // Optionally set priority for image loading
            }}
            style={styles.userImage}
          />

          <View style={styles.userDetails}>
            <Text style={styles.userTitle}>
              {`${item.name.title}:${item.name.first} ${item.name.last}`}
            </Text>
            <Text style={styles.userSubtitle}>
              Country : {item.location.country}
            </Text>
            <Text style={styles.userSubtitle}>Email : {item.email}</Text>
            <Text style={styles.userSubtitle}>Phone No :{item.phone}</Text>
            <Text style={styles.userSubtitle}>Age : {item.dob.age}</Text>
          </View>
        </View>
      );
    },
    [pageNo, usersData],
  );

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={styles.footerContainer}>
        <ActivityIndicator size="large" color="blue" style={styles.loader} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users List</Text>
      <FlatList
        data={usersData}
        renderItem={renderEachUser}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={styles.listContent}
        onEndReached={getData}
        onEndReachedThreshold={0.5} //! (IMP) Triggers at 50% scroll to load more data for a smoother user experience
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  userImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    margin: 10,
    borderRadius: 8,
  },
  userDetails: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  userTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  loader: {
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default Pagination;
