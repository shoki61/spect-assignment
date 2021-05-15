import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { connect } from 'react-redux';
import validator from 'validator';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import styles from '../style';
import { height} from '../../../util/getDimensionsVariables';
import backImg from '../../../assets/boardingBg.png';
import * as actions from '../../../store/actions'
import AuthPageTitle from '../../../components/AuthPageTitle/AuthPageTitle';
import BackgroundImage from '../../../components/BackgroundImage/BackgroundImage';

const SignUpEmail = props => {
    
    const [ email, setEmail ] = useState('');

    const inputHandler = event => setEmail(event.text);

    const continueSignUp = () => {
        if(validator.isEmail(email)){
            props.onSignUpEmail(email);
            props.navigation.navigate('SignUpPassword');
        }
        else {
            Alert.alert(
                'hoppoooooo',
                'invalid mail'
            );
        };
    };

    const newHeight = height - useHeaderHeight();
    return (
        <View style={[styles.signUpContainer, {height: newHeight}]}>
            <BackgroundImage source={backImg} paddingVertical={30}>
                <View style={{alignItems:'center'}}>
                    <AuthPageTitle title='pleace enter your e-mail'/>
                    <Input type='email-address' autoFocus value={email} onChange={inputHandler} placeholder='youraddress@email.com'/>
                </View>
                <Button onPress={continueSignUp} type='dark'>continue</Button>
            </BackgroundImage>
        </View>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUpEmail: email => dispatch(actions.emailEntered(email))
    };
};

export default connect(null, mapDispatchToProps)(SignUpEmail);

