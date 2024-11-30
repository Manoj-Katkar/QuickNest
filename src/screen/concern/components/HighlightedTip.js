import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

const HighlightedTip = ({tipsArray, selectedTipId, highlightedTipIndex}) => {
  const selectedTips =
    tipsArray.find(tip => tip.id === selectedTipId)?.tips || [];

  const renderItem = ({item, index}) => (
    <View
      style={[
        styles.horizontalLine,
        highlightedTipIndex === index && styles.selectedLine, // Highlight the currently visible tip
      ]}
    />
  );

  return (
    <>
      <FlatList
        data={selectedTips} // Pass the selected tips array as data
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
        horizontal // Display items in a horizontal row
        renderItem={renderItem} // Render each item
        contentContainerStyle={styles.highLighTipContainer} // Style the container
        showsHorizontalScrollIndicator={false} // Hide scroll indicator
      />
    </>
  );
};

const styles = StyleSheet.create({
  highLighTipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  horizontalLine: {
    height: 4,
    width: 40,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  selectedLine: {
    backgroundColor: 'blue', // Highlight color
  },
});

export default HighlightedTip;
