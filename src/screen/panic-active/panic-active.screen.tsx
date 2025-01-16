import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';
import {screenWidth} from '../../responsive';
import CustomDefaultLocation from '../../components/custom-default-location';

const PanicActive = ({navigation}: any) => {
  const [currentHomeLocation, setCurrentHomeLocation] = useState(
    `Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA.`,
  );

  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(true);

  // Animation and swipe state
  const swipeX = useRef(new Animated.Value(0)).current;
  const [isSwiped, setIsSwiped] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          // Only allow swiping to the left
          swipeX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -150) {
          // Trigger swipe action if dragged enough
          Animated.timing(swipeX, {
            toValue: -screenWidth,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setIsSwiped(true);
            navigation.goBack();
          });
        } else {
          // Reset position if swipe is not enough
          Animated.spring(swipeX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      // Decrease the timer every second
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }

    // Cleanup the interval when the timer stops or the component unmounts
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  const handleToMapIntegrationScreen = () => {
    navigation.navigate('MapIntegration');
  };

  // Interpolations for animation
  const firstImageOpacity = swipeX.interpolate({
    inputRange: [-screenWidth, 0],
    outputRange: [0, 1], // Fully disappears as the second image overlays
    extrapolate: 'clamp',
  });

  const secondImageTranslateX = swipeX.interpolate({
    inputRange: [-screenWidth, 0],
    outputRange: [0, screenWidth], // Moves in from the right
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <CustomDefaultLocation
          currentHomeLocation={currentHomeLocation}
          parentStyle={{backgroundColor: '#fd4948', borderColor: '#F5F5F540'}}
          locationTextStyle={{color: '#F5F5F5'}}
          panicActiveStatus={true}
        />
        <View style={styles.emergencyTextContainer}>
          <Text style={styles.needHelpText}>Hang in there!</Text>
          <Text style={styles.pressBtnText}>Help will be there shortly!</Text>
        </View>
        <View style={styles.imageParent}>
          <TouchableOpacity onPress={handleToMapIntegrationScreen}>
            <FastImage
              source={Image.PanicActiveImage}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.image}
            />
          </TouchableOpacity>

          <Text style={styles.timerStyle}>{formatTime(timeLeft)}</Text>
        </View>
        <View style={styles.callRecordingContainer}>
          <Text style={styles.pressBtnText}>
            Call recording has been started. Quickly {'\n'}brief us what’s the
            issue!
          </Text>
        </View>

        {/* Swipe Animation Container */}
        <View style={styles.swipeImageContainer}>
          <Animated.View
            style={[
              styles.swipeInner,
              {
                transform: [
                  {
                    translateX: swipeX, // Tied to the swipe gesture
                  },
                ],
              },
            ]}
            {...panResponder.panHandlers}>
            {/* First Image */}
            <View
              style={{
                position: 'absolute',
                left: 0,
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FastImage
                source={Image.SwipeToCancelIcon}
                style={styles.swipeIcon}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>

            {/* Second Image */}
            <Animated.View
              style={{
                position: 'absolute',
                left: 0,
                height: '100%',
                width: '100%',
                transform: [
                  {
                    translateX: swipeX.interpolate({
                      inputRange: [-screenWidth, 45],
                      outputRange: [-screenWidth, screenWidth], // Moves with the swipe
                      extrapolate: 'clamp',
                    }),
                  },
                ],
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FastImage
                source={Image.ReleaseToConfirmIcon}
                style={styles.swipeIcon}
                resizeMode={FastImage.resizeMode.contain}
              />
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3e3f',
    paddingTop: 60,
  },
  parent: {
    width: '92%',
    alignSelf: 'center',
  },
  emergencyTextContainer: {
    marginTop: 20,
  },
  needHelpText: {
    fontSize: 28,
    fontFamily: 'Mulish-SemiBold',
    color: '#F5F5F5',
    textAlign: 'center',
    marginBottom: 10,
  },
  pressBtnText: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#F5F5F5BF',
    textAlign: 'center',
  },
  imageParent: {},
  image: {
    width: screenWidth * 0.99,
    height: 360,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  callRecordingContainer: {},
  timerStyle: {
    fontSize: 28,
    fontFamily: 'Mulish-Bold',
    color: '#FF3B3B',
    paddingRight: 30,
    position: 'absolute',
    top: 182,
    left: 145,
  },
  swipeImageContainer: {
    width: '87%',
    marginTop: 20,
    height: 80,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
    borderRadius: 20,
  },
  swipeInner: {
    width: screenWidth * 0.99,
    height: 70,
    backgroundColor: 'transparent',
  },
  swipeIcon: {
    width: screenWidth * 0.99,
    height: 70,
  },
});

export default PanicActive;
