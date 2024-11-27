import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import PersonalIcon from '../../../../assets/icons/PersonalIcon';
import HomeNewIcon from '../../../../assets/icons/HomeNewIcon';
import VehicalIcon from '../../../../assets/icons/VehicalIcon';
import TravelIcon from '../../../../assets/icons/TravelIcon';
import NotIcon from '../../../../assets/icons/NotIcon';
import BackGroundTipIcon from '../../../../assets/icons/BackGroundTipIcon';

const {width} = Dimensions.get('window'); // Get screen width for paging

const tipsArray = [
  {
    id: 1,
    tipCount: 'Tip 1',
    actualTipContent: 'Always be aware of your \n surroundings',
    iconText: 'Personal',
    icon: <PersonalIcon width={30} height={30} />,
  },
  {
    id: 2,
    tipCount: 'Tip 2',
    actualTipContent:
      'Always ensure your home is secure \n and well-maintained.',
    iconText: 'Home safety',
    icon: <HomeNewIcon width={30} height={30} />,
  },
  {
    id: 3,
    tipCount: 'Tip 3',
    actualTipContent: 'Keep your vehicle secure and \n well-serviced.',
    iconText: 'Vehicle safety',
    icon: <VehicalIcon width={30} height={30} />,
  },
  {
    id: 4,
    tipCount: 'Tip 4',
    actualTipContent: 'Stay alert and plan ahead \n while traveling.',
    iconText: 'Travel safety',
    icon: <TravelIcon width={30} height={30} />,
  },
  {
    id: 5,
    tipCount: 'Tip 5',
    actualTipContent: 'Always be aware of your \n surroundings',
    iconText: 'Personal',
    icon: <PersonalIcon width={30} height={30} />,
  },
  // {
  //   id: 6,
  //   tipCount: 'Tip 6',
  //   actualTipContent: 'Always ensure your home is secure \n and well-maintained.',
  //   iconText:"Home safety",
  // },
  // {
  //   id: 7,
  //   tipCount: 'Tip 7',
  //   actualTipContent: 'Keep your vehicle secure and \n well-serviced.',
  //   iconText:"Vehicle safety",
  // },
  // {
  //   id: 8,
  //   tipCount: 'Tip 8',
  //   actualTipContent: 'Stay alert and plan ahead \n while traveling.',
  //   iconText:"Travel safety",
  // },
];

const SafeTip = () => {
  const [selectedTipId, setSelectedTipId] = useState(tipsArray[0].id); // Track selected tip ID
  const scrollRef = useRef(null); // Reference for ScrollView

  const changeTipMessage = id => {
    const selectedTip = tipsArray.find(tip => tip.id === id);
    if (selectedTip) {
      setSelectedTipId(id); // Update the selected tip
      scrollRef.current?.scrollTo({
        x: (id - 1) * (width * 0.9),
        animated: true,
      }); // Adjust scroll position to match dynamic width
    }
  };

  const handleScrollEnd = event => {
    const scrollX = event.nativeEvent.contentOffset.x; // Gets the current horizontal scroll position of the ScrollView.
    const index = Math.floor(scrollX / (width * 0.9)); // Determine the current page index
    const selectedTip = tipsArray[index];
    if (selectedTip) {
      setSelectedTipId(selectedTip.id); // Update the selected tip ID
    }
  };

  return (
    <View style={styles.container1}>
      {/* Header */}
      <View style={styles.subContainer1}>
        <Text style={styles.text1}>Tips to be safe</Text>
      </View>

      {/* Icon Selector */}
      <ScrollView
        horizontal
        style={styles.subContainer2}
        showsHorizontalScrollIndicator={false}>
        {tipsArray.map((tip, index) => (
          <TouchableOpacity
            key={tip.id}
            onPress={() => changeTipMessage(tip.id)}
            style={styles.eachtipIconContainer}>
            {/* Render the background image if the current tip is selected */}
            <View style={styles.iconContainer}>
              {selectedTipId === tip.id && (
                <BackGroundTipIcon
                  width={45}
                  height={50}
                  style={styles.backgroundImage}
                />
              )}
              {/* rendering the corresponding icon */}
              <View style={{top: 9, left: 9}}>{tip.icon}</View>
            </View>
            <Text
              style={[
                styles.iconText,
                selectedTipId === tip.id && {
                  color: '#4a8dc6', // Change color to #4a8dc6 when selected
                  // textDecorationLine: 'underline', // Add underline when selected,
                  fontFamily: 'Mulish-Bold',
                },
              ]}>
              {tip.iconText}
            </Text>

            {/* Adding the view for the underline part  */}

            {selectedTipId === tip.id && (
              <View style={styles.selectedTextUnderline} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tips Container */}
      <ScrollView
        ref={scrollRef}
        horizontal
        style={styles.container2}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleScrollEnd} // Detect end of scroll
      >
        {tipsArray.map(tip => (
          <View key={tip.id} style={styles.tipCard}>
            <View style={styles.subContainer1_1}>
              <Text style={styles.text1_1}>{tip.tipCount}</Text>
            </View>
            <View style={styles.subContainer2_1}>
              <NotIcon width={20} height={20} />
              <Text style={styles.text2_1}>{tip.actualTipContent}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Highlight Selected Tip */}
      <View style={styles.highLighTipContainer}>
        {tipsArray.map((tip, index) => (
          <View
            key={tip.id}
            style={[
              styles.horizontalLine,
              selectedTipId === tip.id && styles.selectedLine,
              selectedTipId === tip.id && {
                width: index === tipsArray.length - 1 ? '7%' : '5%',
              }, // Make the width 10% for the last tip
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    marginTop: 25,
  },
  subContainer1: {
    paddingLeft: 22,
    marginBottom: 10,
  },
  subContainer2: {
    flexDirection: 'row',
    // backgroundColor: 'aqua',
    marginTop: 10,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    color: 'black',
  },
  container2: {
    width: '90%', // Ensure it takes the full screen width
    // height: 200, // Adjust height as needed for content
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingBottom: 14,
    paddingTop: 14,
  },
  subContainer1_1: {
    paddingLeft: 22,
    // backgroundColor:"aqua",
    alignSelf: 'flex-start',
    // marginLeft:10,
  },
  subContainer2_1: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    // paddingLeft: 22,
    // backgroundColor: 'magenta',
    marginLeft: 29,
  },
  text1_1: {
    fontSize: 14,
    padding: 5,
    paddingLeft: 14,
    paddingRight: 14,
    fontFamily: 'Mulish-Regular',
    // marginTop: 15,
    marginBottom: 15,
    color: 'black',
    backgroundColor: '#fafafa',
    borderRadius: 15,
  },
  text2_1: {
    fontSize: 17,
    fontFamily: 'Mulish-SemiBold',
    paddingLeft: 12,
    color: 'black',
    lineHeight: 22,
  },
  iconText: {
    color: '#97b7de',
    fontSize: 13,
    alignSelf: 'center',
    marginTop: 17,
    left: 9,
    // backgroundColor: 'red',
  },
  eachtipIconContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: 15,
  },
  tipCard: {
    width: width * 0.9, // Match the width of container2 (90% of screen width)
    alignItems: 'center', // Centers content horizontally
    justifyContent: 'center', // Centers content vertically
    // flex: 1, // Ensures the card takes up the full height of the container
    // backgroundColor:"yellow"
  },
  highLighTipContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 10,
    // backgroundColor:"yellow",
    marginRight: 10,
  },
  horizontalLine: {
    width: '3%',
    height: 7,
    backgroundColor: '#ccc',
    marginVertical: 2,
    borderRadius: 10,
    marginLeft: 5,
  },
  selectedLine: {
    backgroundColor: '#488eca',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, //for second child wihin container will come as background
    bottom: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTextUnderline: {
    width: '60%',
    alignSelf: 'center',
    marginLeft: 15,
    height: 2, // Height of the underline
    backgroundColor: '#4a8dc6', // Color of the underline
    marginTop: 4, // Adjust spacing between text and underline
  },
});

export default SafeTip;
