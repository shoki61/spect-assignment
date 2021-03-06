import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { connect } from 'react-redux';
import validator from 'validator';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import backImg from '../../assets/boardingBg.png';
import { height } from '../../util/getDimensionsVariables';
import * as actions from '../../store/actions/index';
import styles from './style';
import AuthPageTitle from '../../components/AuthPageTitle/AuthPageTitle';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';


const Login = props => {
    const [ loginInputs, setLoginInputs ] = useState({emailOrUsername:'', password:''});

    const { loading } = props;

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

    const loginHandler = async () => {
        const { emailOrUsername, password } = loginInputs;
        if(emailOrUsername && validator.isLength(password,{min:8, max:16})){
            props.onLogin(emailOrUsername, password);
        } else {
            Alert.alert(
                'hoppoooooo',
                'the password must be between 8 and 16 characters'
            );
        };
    };

    return (
        <View style={[styles.loginContainer, {height: newHeight}]}>
            <BackgroundImage source={backImg} paddingVertical={30}>
                <View style={styles.loginContent}>
                    <AuthPageTitle title='login'/>
                    <Input autoFocus id='emailOrUsername' value={loginInputs.emailOrUsername} onChange={inputsHandler} placeholder='email or username'/>
                    <Input id='password' password value={loginInputs.password} onChange={inputsHandler} placeholder='password'/>
                </View>
                <View style={styles.loginContent}>
                    <TouchableOpacity>
                        <Text style={styles.loginForgotButton}>forgot password?</Text>
                    </TouchableOpacity>
                    <Button onPress={loginHandler} type='dark'>
                        {
                            loading ? <ActivityIndicator color='#fff'/>
                            : 'continue'
                        }
                    </Button>
                </View>
            </BackgroundImage>
        </View>
    );
};


const mapStateToProps = state => {
    return {
        token: state.token,
        error: state.error,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin:(emailOrUsername, password) => dispatch(actions.login(emailOrUsername, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);