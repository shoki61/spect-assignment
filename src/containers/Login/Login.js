import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import backImg from '../../assets/boardingBg.png';
import { height } from '../../util/getDimensionsVariables';

import styles from './style';

const Login = () => {
    const keyboardHeight = useKeyboardHeight();
    const newHeight = height - useHeaderHeight();
    return (
        <View style={[styles.loginContainer, {height: newHeight}]}>
            <ImageBackground style={[styles.backImg, {paddingBottom:keyboardHeight !== 0 ? keyboardHeight + 50: null}]} source={backImg}>
                <View style={styles.loginContent}>
                    <Text style={styles.loginTitle}>login</Text>
                    <Input placeholder='email or username'/>
                    <Input placeholder='password'/>
                </View>
                <View style={styles.loginContent}>
                    <TouchableOpacity>
                    <Text style={styles.loginForgotButton}>forgot password?</Text>
                    </TouchableOpacity>
                    <Button type='dark'>continue</Button>
                </View>
            </ImageBackground>
        </View>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        onLogin:() => dispatch()
    };
};

export default connect(null, mapDispatchToProps)(Login);