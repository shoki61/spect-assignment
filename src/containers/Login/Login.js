import React from 'react';
import { View, Text, ImageBackground} from 'react-native';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import backImg from '../../assets/boardingBg.png';

import styles from './style';

const Login = () => {
    return (
        <View style={styles.loginContainer}>
            <ImageBackground style={styles.backImg} source={backImg}>
                <Text style={styles.loginTitle}>login</Text>
                <Input/>
                <Button type='dark'>continue</Button>
            </ImageBackground>
        </View>
    );
};

export default Login;