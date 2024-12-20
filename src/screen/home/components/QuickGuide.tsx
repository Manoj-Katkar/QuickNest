import {View, Text, StyleSheet, ListRenderItem} from 'react-native';
import React from 'react';
import PanicIcon from '../../../../assets/icons/PanicIcon';
import People from '../../../../assets/icons/People';
import ReportIcon from '../../../../assets/icons/ReportIcon';
import {FlatList} from 'react-native-gesture-handler';

type safetyArrayType = {
  id: number;
  heading: string;
  para: string;
  icon: React.ReactNode; //for self closing componenet this type is used
};
const safetyArray: Array<safetyArrayType> = [
  //means this will each time return the one object data that return type cheking for the function I have added
  {
    id: 1,
    heading: 'Use the Panic button',
    para: 'Tap panic button to send an \n emergency alert with a voice \n message.',
    icon: <PanicIcon width={150} height={140} />,
  },
  {
    id: 2,
    heading: 'Report Concerns',
    para: 'Alert authorities and family \n members about threatening \n issues.',
    icon: <ReportIcon width={150} height={140} />,
  },
  {
    id: 3,
    heading: 'Your Safe Circle',
    para: 'Add trusted contacts who \n will be notified during \n emergencies',
    icon: <People width={150} height={140} />,
  },
];

const QuickGuide = () => {
  const renderSafetyOptions: ListRenderItem<safetyArrayType> =
    React.useCallback(
      ({item, index, separators}) => {
        switch (item.id % 2) {
          case 0: // For even IDs
            return (
              <View style={styles.subContainerEven}>
                <View style={styles.child}>{item.icon}</View>
                <View style={styles.child}>
                  <Text style={styles.text1}>{item.heading}</Text>
                  <Text style={styles.text2}>{item.para}</Text>
                </View>
              </View>
            );
          case 1: // For odd IDs
            return (
              <View style={styles.subContainer1}>
                <View style={styles.child}>
                  <Text style={styles.text1}>{item.heading}</Text>
                  <Text style={styles.text2}>{item.para}</Text>
                </View>
                <View style={styles.child}>{item.icon}</View>
              </View>
            );
          default:
            return null;
        }
      },
      [safetyArray],
    );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quick Guide to your safety</Text>

      <FlatList
        data={safetyArray}
        renderItem={renderSafetyOptions}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30,
    backgroundColor: '#fafafa',
    // backgroundColor: 'white',
  },
  text: {
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    color: 'black',
  },
  child: {
    alignSelf: 'flex-start',
    // backgroundColor: 'yellow',
  },
  text1: {
    fontSize: 18,
    fontFamily: 'Mulish-Medium',
    color: 'black',
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: 'black',
    lineHeight: 21,
  },
  subContainer1: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  subContainerEven: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: 15,
    gap: 20,
  },
  image: {
    alignSelf: 'center',
  },
  iconContainer: {
    backgroundColor: 'yellow',
    alignSelf: 'flex-start',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default QuickGuide;
