import React, { useState } from 'react';
import { View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { connect } from 'react-redux';
import validator from 'validator';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import styles from '../style';
import { height} from '../../../util/getDimensionsVariables';
import backImg from '../../../assets/boardingBg.png';
import * as actions from '../../../store/actions';
import AuthPageTitle from '../../../components/AuthPageTitle/AuthPageTitle';
import BackgroundImage from '../../../components/BackgroundImage/BackgroundImage';

const SignUpPassword = props => {
    const [ password, setPassword ] = useState('');
    const newHeight = height - useHeaderHeight();

    const inputHandler = event => {
        setPassword(event.text);
    };

    const continueSignUp = () => {
        if(validator.isLength(password, {min:8, max:16})){
            props.onSignUpPassword(password);
            props.navigation.navigate('SignUpUsername');
        } else alert('Hatalı şifre');
    };

    return (
        <View style={[styles.signUpContainer, {height: newHeight}]}>
            <BackgroundImage source={backImg} paddingVertical={30}>
                <View style={{alignItems:'center'}}>
                    <AuthPageTitle title='choose a password' subTitle='8-16 characters'/>
                    <Input value={password} onChange={inputHandler} placeholder='password'/>
                </View>
                <Button onPress={continueSignUp} type='dark'>continue</Button>
            </BackgroundImage>
        </View>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUpPassword: password => dispatch(actions.passwordEntered(password))
    };
};

export default connect(null, mapDispatchToProps)(SignUpPassword);
