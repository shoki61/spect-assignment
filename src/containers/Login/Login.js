import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import backImg from '../../assets/boardingBg.png';
import { height } from '../../util/getDimensionsVariables';
import * as actions from '../../store/actions/index';

import styles from './style';

const Login = () => {

    const [loginInputs, setLoginInputs] = useState({emailOrName:'', password:''});

    const keyboardHeight = useKeyboardHeight();
    const newHeight = height - useHeaderHeight();

    const inputsHandler = event => {
        const { text, id } = event;
        setLoginInputs(prev =>{
            return {
                ...prev,
                [id]: text
            }
        });
    };

    const loginHandler = () => {

    };

    return (
        <View style={[styles.loginContainer, {height: newHeight}]}>
            <ImageBackground style={[styles.backImg, {paddingBottom:keyboardHeight !== 0 ? keyboardHeight + 50: null}]} source={backImg}>
                <View style={styles.loginContent}>
                    <Text style={styles.loginTitle}>login</Text>
                    <Input id='emailOrName' value={loginInputs.emailOrName} onChange={inputsHandler} placeholder='email or username'/>
                    <Input id='password' value={loginInputs.password} onChange={inputsHandler} placeholder='password'/>
                </View>
                <View style={styles.loginContent}>
                    <TouchableOpacity>
                        <Text style={styles.loginForgotButton}>forgot password?</Text>
                    </TouchableOpacity>
                    <Button onPress={loginHandler} type='dark'>continue</Button>
                </View>
            </ImageBackground>
        </View>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        onLogin:(emailOrName, password) => dispatch(actions.login())
    };
};

export default connect(null, mapDispatchToProps)(Login);