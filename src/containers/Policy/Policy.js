import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';

import { height } from '../../util/getDimensionsVariables';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Button from '../../components/UI/Button/Button';
import backImg from '../../assets/boardingBg.png';
import styles from './style';

const Policy = () => {
    const newHeight = height - useHeaderHeight();
    return (
        <View style={[styles.policyContainer, { height : newHeight }]}>
            <BackgroundImage source={backImg} style={{paddingBottom:25}}>
                <ScrollView style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>we live in strange {"\n"} times</Text>
                    <Text style={styles.infoText}>//the internet has enabled easy access to information</Text>
                    <Text style={styles.infoText}>//social media has has enabled easy voicing of opinions</Text>
                </ScrollView>
                <Button type='white'>continue</Button>
            </BackgroundImage>
        </View>
    );
};

export default Policy;