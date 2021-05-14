import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { connect } from 'react-redux';

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

    const { token, error, loading } = props;
    useEffect(() => {
        if(token) alert('Hoş heldiniz!');
        if(error) alert('Hatalı giriş!');
    }, [token, error]);

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
        const { emailOrUsername, password } = loginInputs;
        if(emailOrUsername && password){
            props.onLogin(emailOrUsername, password);
        } else alert('hoppoooooo');
    };

    return (
        <View style={[styles.loginContainer, {height: newHeight}]}>
            <BackgroundImage source={backImg} paddingVertical={30}>
                <View style={styles.loginContent}>
                    <AuthPageTitle title='login'/>
                    <Input id='emailOrUsername' value={loginInputs.emailOrUsername} onChange={inputsHandler} placeholder='email or username'/>
                    <Input id='password' value={loginInputs.password} onChange={inputsHandler} placeholder='password'/>
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