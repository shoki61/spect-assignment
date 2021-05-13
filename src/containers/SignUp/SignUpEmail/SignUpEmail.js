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
import * as actions from '../../../store/actions'

const SignUpEmail = props => {
    
    const [ email, setEmail ] = useState('');

    const inputHandler = event => setEmail(event.text);

    const continueSignUp = () => {
        if(validator.isEmail(email)){
            props.onSignUpEmail(email);
            props.navigation.navigate('SignUpPassword');
        }
        else alert('Geçersiz email girdiniz');
    };

    const keyboardHeight = useKeyboardHeight();
    const newHeight = height - useHeaderHeight();
    return (
        <View style={[styles.signUpContainer, {height: newHeight}]}>
            <ImageBackground style={[styles.backImg, {paddingBottom: keyboardHeight !== 0 ? keyboardHeight + 50: null}]} source={backImg}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.title}>pleace enter your e-mail</Text>
                    <Input value={email} onChange={inputHandler} placeholder='youraddress@email.com'/>
                </View>
                <Button onPress={continueSignUp} type='dark'>continue</Button>
            </ImageBackground>
        </View>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUpEmail: email => dispatch(actions.emailEntered(email))
    };
};

export default connect(null, mapDispatchToProps)(SignUpEmail);

