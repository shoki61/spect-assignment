import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import SImage from 'react-native-scalable-image';

import Button from '../../components/UI/Button/Button';
import backImg from '../../assets/boardingBg.png';
import appLogo from '../../assets/spectlogo2.png';

import styles from './style';

const Auth = props => {
    return <View style={styles.authContainer}>
        <ImageBackground source={backImg} style={styles.authBackImg}>
            <SImage width={120} source={appLogo}/>
            <View>
                <Button onPress={() => props.navigation.navigate('Login')} type='dark'>login</Button>
                <Button onPress={() => props.navigation.navigate('SignUpEmail')} type='white'>sign up</Button>
            </View>
        </ImageBackground>
    </View>;
};


export default Auth;