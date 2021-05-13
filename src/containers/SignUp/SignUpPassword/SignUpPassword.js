import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { connect } from 'react-redux';
import useKeyboardHeight from 'react-native-use-keyboard-height';
import validator from 'validator';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import styles from './style';
import { height} from '../../../util/getDimensionsVariables';
import backImg from '../../../assets/boardingBg.png';
import * as actions from '../../../store/actions';

const SignUpPassword = props => {
    const [ password, setPassword ] = useState('');
    const keyboardHeight = useKeyboardHeight();
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
            <ImageBackground style={[styles.backImg, {paddingBottom: keyboardHeight !== 0 ? keyboardHeight + 50: null}]} source={backImg}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.title}>choose a password</Text>
                    <Text style={styles.signUpInfo}>8-16 characters</Text>
                    <Input value={password} onChange={inputHandler} placeholder='password'/>
                </View>
                <Button onPress={continueSignUp} type='dark'>continue</Button>
            </ImageBackground>
        </View>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUpPassword: password => dispatch(actions.passwordEntered(password))
    };
};

export default connect(null, mapDispatchToProps)(SignUpPassword);
