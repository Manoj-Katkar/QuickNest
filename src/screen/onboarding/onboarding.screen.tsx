import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import DrawerNextIcon from '../../../assets/icons/DrawerNextIcon';

const {width, height} = Dimensions.get('window');

const startUpDataArray = [
  {
    id: 1,
    imagePath: require('../../../assets/images/Welcome_Image.png'),
    heading: 'Welcome',
    para: 'Stay protected with 24/7 emergency \nsupport at your fingertips.',
  },
  {
    id: 2,
    imagePath: require('../../../assets/images/Quick_Panic_Image.png'),
    heading: 'Quick Panic Response',
    para: 'Tap the button three times to raise a request \nin emergencies',
  },
  {
    id: 3,
    imagePath: require('../../../assets/images/Record_Image.png'),
    heading: 'Record & Report',
    para: 'Briefly describe your situation for faster and \naccurate help',
  },
  {
    id: 4,
    imagePath: require('../../../assets/images/All_Set_Image.png'),
    heading: 'All Set!',
    para: 'You’re ready to go. Modify any settings or jump right in!',
  },
];

const Onboarding = ({navigation}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = React.useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < startUpDataArray.length - 1 && flatListRef.current) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };

  const handleBack = () => {
    if (currentIndex > 0 && flatListRef.current) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      flatListRef.current.scrollToIndex({index: currentIndex - 1});
    }
  };

  const handleScroll = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const currentTipIndex = Math.round(scrollX / width);
    setCurrentIndex(currentTipIndex);
  };

  const navigateToHome = () => {
    navigation.navigate('Login'); //! for temp purpose I have given home later I have to re-direct to the Authentication screen
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <View style={styles.slide}>
        <FastImage
          source={item.imagePath}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.highLighTipContainer}>
          {startUpDataArray.map((element, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{item.heading}</Text>
          <Text style={styles.para}>{item.para}</Text>
        </View>
      </View>
    ),
    [currentIndex],
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={startUpDataArray}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onMomentumScrollEnd={handleScroll}
      />

      {currentIndex === startUpDataArray.length - 1 ? (
        <>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn} onPress={navigateToHome}>
              <Text style={styles.btnText}>Get started</Text>
              <DrawerNextIcon width={26} height={26} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.footerView}>
            <TouchableOpacity
              onPress={handleBack}
              disabled={currentIndex === 0}>
              <Text
                style={[
                  styles.backBtnText,
                  currentIndex === 0 && {
                    color: '#2B2B2B40',
                    fontFamily: 'Mulish-Bold',
                    fontSize: 16,
                    lineHeight: 20.8,
                  },
                ]}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={handleNext}
              disabled={currentIndex === startUpDataArray.length - 1}>
              <DrawerNextIcon width={26} height={26} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.4,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
    color: 'black',
    marginBottom: 10,
  },
  para: {
    fontSize: 16,
    color: '#2B2B2BBF',
    fontFamily: 'Mulish-Regular',
    lineHeight: 20.8,
  },
  headingContainer: {
    width: '95%',
    paddingLeft: 10,
    marginTop: 70,
    // backgroundColor: 'aqua',
  },
  btn2: {
    backgroundColor: '#011e62',
    padding: 15,
    borderRadius: 50,
  },
  footerView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    // backgroundColor: 'aqua',
  },
  backBtnText: {
    color: '#2B2B2B',
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    lineHeight: 20.8,
  },
  highLighTipContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginRight: 10,
    padding: 5,
    borderRadius: 5,
    // backgroundColor: 'aqua',
  },
  indicator: {
    width: 10,
    height: 6,
    backgroundColor: '#cddeef',
    borderRadius: 2.5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    width: 40,
    height: 6,
    backgroundColor: '#4B8DC6',
  },
  buttonContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'aqua',
    // paddingTop: 0,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '89%',
    backgroundColor: '#011e62',
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#011e62',
    marginBottom: 18,
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
  },
  icon: {
    marginLeft: 5,
    // paddingTop: 16,
  },
});

export default Onboarding;
