import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PanicIcon from '../../../../assets/icons/PanicIcon';
import People from '../../../../assets/icons/People';
import ReportIcon from '../../../../assets/icons/ReportIcon';

const QuickGuide = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quick Guide to your safety</Text>

      <View style={styles.subContainer1}>
        <View style={styles.child}>
          <Text style={styles.text1}>Use the Panic button</Text>
          <Text style={styles.text2}>
            Tap panic button to send an {'\n'} emergency alert with a voice{' '}
            {'\n'} message.
          </Text>
        </View>

        <View>
          <PanicIcon width={150} height={150} style={styles.image} />
        </View>
      </View>

      {/* 2nd  */}

      <View style={styles.subContainer1}>
        <View style={styles.child}>
          <ReportIcon width={150} height={150} />
        </View>

        <View>
          <Text style={styles.text1}>Report Concerns</Text>
          <Text style={styles.text2}>
            Alert authorities and family {'\n'} members about threatening {'\n'}{' '}
            issues.
          </Text>
        </View>
      </View>

      {/* 3rd  */}

      <View style={styles.subContainer1}>
        <View style={styles.child}>
          <Text style={styles.text1}>Your Safe Circle</Text>
          <Text style={styles.text2}>
            Add trusted contacts who {'\n'} will be notified during {'\n'}{' '}
            emergencies
          </Text>
        </View>

        <View>
          <People width={150} height={150} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30,
    backgroundColor: '#fafafa',
  },
  text: {
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    color: 'black',
  },
  child: {
    alignSelf: 'flex-start',
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
  },
  subContainer1: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
  },
});

export default QuickGuide;
