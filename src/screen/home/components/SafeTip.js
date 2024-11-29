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
    iconText: 'Personal',
    icon: <PersonalIcon width={30} height={30} />,
    tips: [
      {
        tipCount: 'Tip 1',
        actualTipContent: 'Always be aware of surroundings',
      },
      {
        tipCount: 'Tip 2',
        actualTipContent: 'Keep doors and windows locked',
      },
      {
        tipCount: 'Tip 3',
        actualTipContent: 'Test smoke detectors regularly',
      },
      {
        tipCount: 'Tip 4',
        actualTipContent: 'Avoid overloading electrical outlets',
      },
      {
        tipCount: 'Tip 5',
        actualTipContent: 'Create emergency evacuation plan',
      },
      {
        tipCount: 'Tip 6',
        actualTipContent: 'Ensure proper ventilation in \n kitchens',
      },
    ],
  },
  {
    id: 2,
    iconText: 'Home safety',
    icon: <HomeNewIcon width={30} height={30} />,
    tips: [
      {
        tipCount: 'Tip 1',
        actualTipContent: 'Install strong locks on doors',
      },
      {
        tipCount: 'Tip 2',
        actualTipContent: 'Use peephole to check visitors',
      },
      {
        tipCount: 'Tip 3',
        actualTipContent: 'Keep a fire extinguisher nearby',
      },
      {
        tipCount: 'Tip 4',
        actualTipContent: 'Secure furniture to prevent tipping',
      },
      {
        tipCount: 'Tip 5',
        actualTipContent: 'Store chemicals out of reach',
      },
      {
        tipCount: 'Tip 6',
        actualTipContent: 'Ensure outdoor lighting is \n adequate',
      },
    ],
  },
  {
    id: 3,
    iconText: 'Vehicle safety',
    icon: <VehicalIcon width={30} height={30} />,
    tips: [
      {
        tipCount: 'Tip 1',
        actualTipContent: 'Always wear seatbelt in vehicles',
      },
      {
        tipCount: 'Tip 2',
        actualTipContent: 'Follow speed limits for safety',
      },
      {
        tipCount: 'Tip 3',
        actualTipContent: 'Inspect tires for inflation regularly',
      },
      {
        tipCount: 'Tip 4',
        actualTipContent: 'Never drive under the influence',
      },
      {
        tipCount: 'Tip 5',
        actualTipContent: 'Keep vehicle well-maintained \n always',
      },
      {
        tipCount: 'Tip 6',
        actualTipContent: 'Park in well-lit areas securely',
      },
    ],
  },
  {
    id: 4,
    iconText: 'Travel safety',
    icon: <TravelIcon width={30} height={30} />,
    tips: [
      {
        tipCount: 'Tip 1',
        actualTipContent: 'Keep important documents secured',
      },
      {
        tipCount: 'Tip 2',
        actualTipContent: 'Avoid displaying valuable items publicly',
      },
      {
        tipCount: 'Tip 3',
        actualTipContent: 'Research destination and local customs',
      },
      {
        tipCount: 'Tip 4',
        actualTipContent: 'Share itinerary with trusted contacts',
      },
      {
        tipCount: 'Tip 5',
        actualTipContent: 'Stay alert in crowded areas',
      },
      {
        tipCount: 'Tip 6',
        actualTipContent: 'Keep emergency contacts accessible always',
      },
    ],
  },
  {
    id: 5,
    iconText: 'Personal',
    icon: <PersonalIcon width={30} height={30} />,
    tips: [
      {
        tipCount: 'Tip 1',
        actualTipContent: 'Always be aware of surroundings',
      },
      {
        tipCount: 'Tip 2',
        actualTipContent: 'Keep doors and windows locked',
      },
      {
        tipCount: 'Tip 3',
        actualTipContent: 'Test smoke detectors regularly',
      },
      {
        tipCount: 'Tip 4',
        actualTipContent: 'Avoid overloading electrical outlets',
      },
      {
        tipCount: 'Tip 5',
        actualTipContent: 'Create emergency evacuation plan',
      },
      {
        tipCount: 'Tip 6',
        actualTipContent: 'Ensure proper ventilation in \nkitchens',
      },
    ],
  },
];

const SafeTip = () => {
  const [selectedTipId, setSelectedTipId] = useState(tipsArray[0].id); // Track selected tip ID

  const [highlightedTipIndex, setHighlightedTipIndex] = useState(0); // Track highlighted tip index

  const scrollRef = useRef(null); // Reference for ScrollView

  const changeTipMessage = id => {
    const selectedTip = tipsArray.find(tip => tip.id === id);
    if (selectedTip) {
      setSelectedTipId(id); // Update the selected tip
      scrollRef.current?.scrollTo({
        x: 0, // Reset to the start of the scrollable tips for the new selection
        animated: true, //ensures that the scrolling happens with a smooth animation instead of jumping abruptly to the target position
      });
      setHighlightedTipIndex(0); // Reset highlighted tip index
    }
  };

  const handleScrollEnd = event => {
    const scrollX = event.nativeEvent.contentOffset.x; // Get current scroll position
    const currentTipIndex = Math.round(scrollX / (width * 0.9)); // Calculate index of the currently visible tip
    setHighlightedTipIndex(currentTipIndex); // Update the highlighted tip index
  };

  return (
    <>
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
                    width={48}
                    height={50}
                    style={styles.backgroundImage}
                  />
                )}
                {/* Rendering the corresponding icon */}
                <View style={{top: 9, left: 9}}>{tip.icon}</View>
              </View>
              <Text
                style={[
                  styles.iconText,
                  selectedTipId === tip.id && {
                    color: '#4a8dc6', // Change color to #4a8dc6 when selected
                    fontFamily: 'Mulish-Bold',
                  },
                ]}>
                {tip.iconText}
              </Text>

              {/* Adding the view for the underline part */}
              {selectedTipId === tip.id && (
                <View style={styles.selectedTextUnderline} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Tips Container */}
      <View>
        <ScrollView
          ref={scrollRef}
          horizontal
          style={styles.container2}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={handleScrollEnd}>
          {/* Find the selected tip object and render its tips */}
          {tipsArray
            .find(tip => tip.id === selectedTipId) // Get the selected object
            ?.tips.map((singleTip, index) => (
              <View key={index} style={styles.tipCard}>
                {/* Tip Header */}
                <View style={styles.subContainer1_1}>
                  <Text style={styles.text1_1}>{singleTip.tipCount}</Text>
                </View>
                {/* Tip Content */}
                <View style={styles.subContainer2_1}>
                  <NotIcon width={20} height={20} style={styles.notIcon} />
                  <Text style={styles.text2_1}>
                    {singleTip.actualTipContent}
                  </Text>
                </View>
              </View>
            ))}
        </ScrollView>

        {/* Highlight Selected Tip */}
        <View style={styles.highLighTipContainer}>
          {tipsArray
            .find(tip => tip.id === selectedTipId) // Get the selected tips
            ?.tips.map((currentTip, index) => (
              <View
                key={index}
                style={[
                  styles.horizontalLine,
                  highlightedTipIndex === index && styles.selectedLine, // Highlight the currently visible tip
                ]}
              />
            ))}
        </View>
      </View>
    </>
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
    marginTop: 10,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    color: 'black',
  },
  container2: {
    width: '90%', // Ensure it takes the full screen width
    alignSelf: 'center',
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingBottom: 10,
    paddingTop: 8,
  },
  subContainer1_1: {
    paddingLeft: 12,
    alignSelf: 'flex-start',
  },
  subContainer2_1: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 29,
    marginTop: 0,
    paddingTop: 0,
  },
  text1_1: {
    fontSize: 14,
    padding: 5,
    paddingLeft: 14,
    paddingRight: 14,
    fontFamily: 'Mulish-Regular',
    marginBottom: 15,
    color: 'black',
    backgroundColor: '#fafafa',
    borderRadius: 15,
  },
  text2_1: {
    fontSize: 17,
    fontFamily: 'Mulish-SemiBold',
    paddingLeft: 8,
    color: 'black',
    lineHeight: 24,
  },
  iconText: {
    color: '#97b7de',
    fontSize: 13,
    alignSelf: 'center',
    marginTop: 17,
    left: 9,
  },
  eachtipIconContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  tipCard: {
    width: width * 0.9, // Match the width of container2 (90% of screen width)
    alignItems: 'center', // Centers content horizontally
    justifyContent: 'center', // Centers content vertically
  },
  highLighTipContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 10,
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
    bottom: 0,
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
  notIcon: {
    marginTop: 2,
  },
});

export default SafeTip;
