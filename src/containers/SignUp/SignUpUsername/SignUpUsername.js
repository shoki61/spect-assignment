import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { connect } from 'react-redux';
import validator from 'validator';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import styles from '../style';
import { height } from '../../../util/getDimensionsVariables';
import backImg from '../../../assets/boardingBg.png';
import * as actions from '../../../store/actions';
import AuthPageTitle from '../../../components/AuthPageTitle/AuthPageTitle';
import BackgroundImage from '../../../components/BackgroundImage/BackgroundImage';

const SignUpUsername = props => {
    const [username, setUsername] = useState('');

    const { onSignUpUsername, navigation } = props;

    const newHeight = height - useHeaderHeight();

    const inputHandler = event => {
        setUsername(event.text);
    };

    const continueSignUp = () => {
        if(validator.isLength(username, {min:3, max: 16})){
            onSignUpUsername(username);
            navigation.navigate('Policy');
        } else alert('Hatalı kullanıcı adı');
    };
    return (
        <View style={[styles.signUpContainer, {height: newHeight}]}>
            <BackgroundImage source={backImg} paddingVertical={30}>
                <View style={{alignItems:'center'}}>
                    <AuthPageTitle title='choose your username' subTitle='3 to 16 characters, only letters and numbers, no spaces please'/>
                    <Input value={username} onChange={inputHandler} placeholder='username'/>
                </View>
                <Button onPress={continueSignUp} type='dark'>continue</Button>
            </BackgroundImage>
        </View>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        onSignUpUsername: username => dispatch(actions.usernameEntered(username))
    };
};

export default connect(null, mapDispatchToProps)(SignUpUsername);
