import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import CheckBox from 'react-native-check-box'

import { height } from '../../util/getDimensionsVariables';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Button from '../../components/UI/Button/Button';
import backImg from '../../assets/boardingBg.png';
import styles from './style';

const Policy = () => {
    const [termsOfService, setTermsOfService] = useState(false);
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const newHeight = height - useHeaderHeight();
    return (
        <View style={[styles.policyContainer, { height : newHeight }]}>
            <BackgroundImage source={backImg} style={{paddingBottom:25}}>
                <ScrollView style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>we live in strange {"\n"} times</Text>
                    <Text style={styles.infoText}>//the internet has enabled easy access to information</Text>
                    <Text style={styles.infoText}>//social media has has enabled easy voicing of opinions</Text>
                </ScrollView>
                <View style={styles.checkboxContainer}>
                    <CheckBox isChecked={termsOfService} onClick={() => setTermsOfService(!termsOfService)}/>
                    <Text style={styles.checkboxText}>agree to terms of service</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox isChecked={privacyPolicy} onClick={() => setPrivacyPolicy(!privacyPolicy)}/>
                    <Text style={styles.checkboxText}>agree to privacy policy</Text>
                </View>
                <Button  type='white'>continue</Button>
            </BackgroundImage>
        </View>
    );
};

export default Policy;