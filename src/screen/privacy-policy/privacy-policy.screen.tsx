import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CustomHeader from '../../components/header-comp';

type PolicyDetails = {
  privacyCount: number;
  actualPolicyContent: string;
};

type PrivacyItem = {
  id: number;
  para?: string; // Optional because not all items have `para`
  policyDetails: PolicyDetails;
};

const privacyArray: PrivacyItem[] = [
  {
    id: 1,
    para: `At Shuff Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our mobile app.`,
    policyDetails: {
      privacyCount: 1,
      actualPolicyContent: `Information We Collect  We collect personal information that you provide when registering or using our app, including your name, contact details, location data, and emergency reports. We may also collect information automatically through cookies and similar technologies to enhance your user experience`,
    },
  },
  {
    id: 2,
    policyDetails: {
      privacyCount: 2,
      actualPolicyContent: `How We Use Your Information  Your information is used to provide our home security services, including dispatching our mobile patrol team in response to reported incidents. We use your location data to accurately direct our response teams. Your information also helps us improve our services, communicate with you about your reports, and send you important updates.`,
    },
  },
  {
    id: 3,
    policyDetails: {
      privacyCount: 3,
      actualPolicyContent: `Sharing Your Information  We do not share your personal information with third parties, except when necessary to provide our services or comply with legal obligations. This may include sharing information with emergency responders, law enforcement, or other relevant authorities when a crime situation is reported.`,
    },
  },
  {
    id: 4,
    policyDetails: {
      privacyCount: 4,
      actualPolicyContent: `Data Security  We implement robust security measures to protect your information from unauthorized access, alteration, or disclosure. All data is encrypted and stored securely, and access is restricted to authorized personnel only.`,
    },
  },
  {
    id: 5,
    policyDetails: {
      privacyCount: 5,
      actualPolicyContent: `Your Rights  You have the right to access, update, or delete your personal information at any time. You can manage your data preferences within the app or contact us directly for assistance`,
    },
  },
  {
    id: 6,
    policyDetails: {
      privacyCount: 6,
      actualPolicyContent: `Changes to This Policy  We may update this Privacy Policy periodically. Any changes will be communicated through the app, and your continued use of the app constitutes acceptance of these changes..`,
    },
  },
];

const PrivacyPolicy = ({navigation}: any) => {
  const [privacyDataArray, setPrivacyDataArray] = useState<PrivacyItem[]>([]);

  useEffect(() => {
    setPrivacyDataArray(privacyArray);
  }, []);

  const renderEachPolicy = useCallback(
    ({item}: {item: PrivacyItem}) => (
      <View style={styles.mainContainer}>
        <View style={styles.child1}>
          <Text style={styles.countText}>
            {item.policyDetails.privacyCount} .
          </Text>
        </View>
        <View style={styles.child2}>
          <Text style={styles.policyText}>
            {item.policyDetails.actualPolicyContent}
          </Text>
        </View>
      </View>
    ),
    [privacyDataArray],
  );

  return (
    <ScrollView style={styles.container}>
      <CustomHeader headerText="Privacy Policy" navigation={navigation} />

      <ScrollView horizontal contentContainerStyle={{width: '100%'}}>
        <FlatList
          data={privacyDataArray}
          renderItem={renderEachPolicy}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={
            <View style={styles.textParaContainer}>
              <Text style={styles.textPara}>{privacyArray[0]?.para}</Text>
            </View>
          }
          ListFooterComponent={
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                For questions or concerns regarding this Privacy Policy, {'\n'}
                please contact us at
                <TouchableOpacity style={styles.emailBtn}>
                  <Text style={styles.emailText}> privacy@shuffgroup.com</Text>
                </TouchableOpacity>
              </Text>
            </View>
          }
          contentContainerStyle={styles.flatListContent}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  textParaContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  textPara: {
    fontSize: 13,
    color: '#2B2B2B',
    fontFamily: 'Mulish-Regular',
    lineHeight: 18,
  },
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  child1: {
    // backgroundColor: 'yellow',
    marginRight: 5,
    padding: 5,
  },
  child2: {
    flex: 1,
    // backgroundColor: 'yellow',
    // padding: 5,
    paddingTop: 5,
  },
  countText: {
    fontSize: 13,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
  },
  policyText: {
    fontSize: 13,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
    lineHeight: 18,
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    // backgroundColor: 'aqua',
  },
  footerText: {
    fontSize: 13,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
  },
  emailText: {
    fontSize: 13,
    fontFamily: 'Mulish-Bold',
    color: '#002544',
    // paddingTop: 90,
    top: 3,
  },
  flatListContent: {
    paddingBottom: 20, // Ensures padding for the last item
  },
  emailBtn: {
    // backgroundColor: 'magenta',
  },
});

export default PrivacyPolicy;
