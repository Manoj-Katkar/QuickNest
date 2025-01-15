import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CustomHeader from '../../components/header-comp';

type TermsDetails = {
  termCount: number;
  actualTermsContent: string;
};

type TermsItem = {
  id: number;
  para?: string;
  termsDetails: {
    termCount: number;
    actualTermsContent: string;
  };
};

const termsArray: TermsItem[] = [
  {
    id: 1,
    para: `Welcome to the Shuff Group Mobile App. By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully to understand your rights and responsibilities.`,
    termsDetails: {
      termCount: 1,
      actualTermsContent: `Fair Usage Policy for Panic Button  The panic button is strictly intended for use in active emergency situations, such as break-ins, suspicious activities, or any immediate threats to safety. Misuse of the panic button, including false alarms, testing without prior notice, or using it for non-emergency purposes, can lead to suspension or termination of your access to this feature. We reserve the right to investigate instances of misuse and take appropriate action.`,
    },
  },
  {
    id: 2,
    termsDetails: {
      termCount: 2,
      actualTermsContent: `Response Team Limitations  Shuff Group’s response team will only attend emergencies at the address registered to your account. The mobile patrol team will not respond to panic alerts if you are not at the registered home address at the time of the alert. Users are responsible for ensuring their registered address is correct and up-to-date to ensure accurate responses. Shuff Group is not liable for missed or incorrect responses due to inaccuracies in your registered information.`,
    },
  },
  {
    id: 3,
    termsDetails: {
      termCount: 3,
      actualTermsContent: `Emergency Service Coordination  When you activate the panic button, Shuff Group's mobile patrol team will respond promptly. If you have given prior consent, we may also coordinate with emergency services (999) and respond when you make an emergency call to them. However, Shuff Group does not replace emergency services; we provide supplementary support.`,
    },
  },
  {
    id: 4,
    termsDetails: {
      termCount: 4,
      actualTermsContent: `Contacting Emergency Services  In any emergency, it is essential that you contact emergency services (999) first. Shuff Group’s response team does not have the same authority, equipment, or legal powers as emergency services. Our app is designed to provide additional support, but it is not a substitute for calling emergency services.`,
    },
  },
  {
    id: 5,
    termsDetails: {
      termCount: 5,
      actualTermsContent: `Limitations of Liability  While we aim to respond quickly to all alerts, we cannot guarantee immediate assistance due to factors outside our control, such as network issues, geographical constraints, or other operational challenges. Shuff Group is not liable for any loss, damage, or injury resulting from the failure or delay of our response team. By using the app, you agree to these limitations.`,
    },
  },
  {
    id: 6,
    termsDetails: {
      termCount: 6,
      actualTermsContent: `User Responsibilities  Users are responsible for maintaining up-to-date information on their app profile, including their registered home address and contact details. You must also ensure that your use of the app complies with these Terms and Conditions, and you agree not to misuse or abuse the app's features.`,
    },
  },
  {
    id: 7,
    termsDetails: {
      termCount: 7,
      actualTermsContent: `Changes to Services and Terms  Shuff Group reserves the right to modify, suspend, or discontinue any part of our services, including the terms of use, at any time without prior notice. Continued use of the app signifies your acceptance of any changes.`,
    },
  },
  {
    id: 8,
    termsDetails: {
      termCount: 8,
      actualTermsContent: `Privacy and Data Protection  Your privacy is important to us. For details on how we collect, use, and protect your data, please refer to our Privacy Policy, which is accessible through the app and on our website`,
    },
  },
  {
    id: 9,
    termsDetails: {
      termCount: 9,
      actualTermsContent: `Governing Law  These Terms and Conditions are governed by the laws of [your jurisdiction]. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of [your jurisdiction]`,
    },
  },
];

const TermsConditions = ({navigation}: any) => {
  const [termsDataArray, setTermsDataArray] = useState<TermsItem[]>([]);

  useEffect(() => {
    setTermsDataArray(termsArray);
  }, []);

  const renderEachPolicy = useCallback(
    ({item}: {item: TermsItem}) => (
      <View style={styles.mainContainer}>
        <View style={styles.child1}>
          <Text style={styles.countText}>{item.termsDetails.termCount} .</Text>
        </View>
        <View style={styles.child2}>
          <Text style={styles.policyText}>
            {item.termsDetails.actualTermsContent}
          </Text>
        </View>
      </View>
    ),
    [termsDataArray],
  );
  return (
    <ScrollView style={styles.container}>
      <CustomHeader headerText="Terms & Condition" navigation={navigation} />
      <ScrollView horizontal contentContainerStyle={{width: '100%'}}>
        <FlatList
          data={termsDataArray}
          renderItem={renderEachPolicy}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={
            <View style={styles.textParaContainer}>
              <Text style={styles.textPara}>{termsArray[0]?.para}</Text>
            </View>
          }
          ListFooterComponent={
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                For any questions, clarifications, or further assistance, {'\n'}
                please contact us at [contact information]. Your safety is
                {'\n'}our priority, and we appreciate your cooperation in
                helping us provide effective and responsible support services.
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
    paddingTop: 10,
    // paddingBottom: 40,
    // backgroundColor: 'aqua',
  },
  footerText: {
    fontSize: 13,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
  },

  flatListContent: {
    paddingBottom: 20, // Ensures padding for the last item
  },
});

export default TermsConditions;
