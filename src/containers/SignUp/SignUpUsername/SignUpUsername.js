import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { connect } from 'react-redux';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import validator from 'validator';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import styles from './style';
import { height } from '../../../util/getDimensionsVariables';
import backImg from '../../../assets/boardingBg.png';
import * as actions from '../../../store/actions';

const SignUpUsername = props => {
    const [username, setUsername] = useState('');

    const { email, password, onSignUp, onSignUpUsername } = props;

    const keyboardHeight = useKeyboardHeight();
    const newHeight = height - useHeaderHeight();

    const inputHandler = event => {
        setUsername(event.text);
    };

    const continueSignUp = () => {
        if(validator.isLength(username, {min:3, max: 16})){
            onSignUpUsername(username);
            onSignUp(email,password, username);
        } else alert('Hatalı kullanıcı adı');
    };
    return (
        <View style={[styles.signUpContainer, {height: newHeight}]}>
            <ImageBackground style={[styles.backImg, {paddingBottom: keyboardHeight !== 0 ? keyboardHeight + 50: null}]} source={backImg}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.title}>choose your username</Text>
                    <Text style={styles.signUpInfo}>3 to 16 characters, only letters and numbers, no spaces please</Text>
                    <Input value={username} onChange={inputHandler} placeholder='username'/>
                </View>
                <Button onPress={continueSignUp} type='dark'>continue</Button>
            </ImageBackground>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        email: state.email,
        password: state.password,
        loading: state.loadign,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUpUsername: username => dispatch(actions.usernameEntered(username)),
        onSignUp: (email, password, username) => dispatch(actions.signUp(email, password, username))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUsername);
