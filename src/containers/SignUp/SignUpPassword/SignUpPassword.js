import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import useKeyboardHeight from 'react-native-use-keyboard-height';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import styles from './style';
import { height} from '../../../util/getDimensionsVariables';
import backImg from '../../../assets/boardingBg.png';

const SignUpPassword = props => {
    const keyboardHeight = useKeyboardHeight();
    const newHeight = height - useHeaderHeight();
    return (
        <View style={[styles.signUpContainer, {height: newHeight}]}>
            <ImageBackground style={[styles.backImg, {paddingBottom: keyboardHeight !== 0 ? keyboardHeight + 50: null}]} source={backImg}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.title}>choose a password</Text>
                    <Text style={styles.signUpInfo}>8-16 characters</Text>
                    <Input placeholder='password'/>
                </View>
                <Button onPress={() => props.navigation.navigate('SignUpUsername')} type='dark'>continue</Button>
            </ImageBackground>
        </View>
    );
};

export default SignUpPassword;
