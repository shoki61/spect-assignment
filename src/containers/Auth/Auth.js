import React from 'react';
import { View, ImageBackground } from 'react-native';
import SImage from 'react-native-scalable-image';

import Button from '../../components/UI/Button/Button';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import backImg from '../../assets/boardingBg.png';
import appLogo from '../../assets/spectlogo2.png';

import styles from './style';

const Auth = props => {
    return <View style={styles.authContainer}>
        <BackgroundImage source={backImg} paddingVertical={70}>
            <SImage width={120} source={appLogo}/>
            <View>
                <Button onPress={() => props.navigation.navigate('Login')} type='dark'>login</Button>
                <Button onPress={() => props.navigation.navigate('SignUpEmail')} type='white'>sign up</Button>
            </View>
        </BackgroundImage>
    </View>;
};


export default Auth;