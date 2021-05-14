import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { connect } from 'react-redux';
import CheckBox from 'react-native-check-box'

import { height } from '../../util/getDimensionsVariables';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Button from '../../components/UI/Button/Button';
import backImg from '../../assets/boardingBg.png';
import * as actions from '../../store/actions';
import styles from './style';

const Policy = props => {
    const [termsOfService, setTermsOfService] = useState(false);
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const newHeight = height - useHeaderHeight();

    const { email, password, username, loading, error, token, policies, onSignUp } = props;

    useEffect(()=> {
        if(error) alert('hata');
        if(token) alert('Hoş geldiniz')
    }, [token, error]);

    const signUpHandler = () => {
        if(termsOfService && privacyPolicy) {
            onSignUp(email, password, username, policies);
        } else alert('Hata');
    };

    return (
        <View style={[styles.policyContainer, { height : newHeight }]}>
            <BackgroundImage source={backImg} style={{paddingBottom:25}}>
                <ScrollView style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>we live in strange {"\n"} times</Text>
                    <Text style={styles.infoText}>//the internet has enabled easy access to information</Text>
                    <Text style={styles.infoText}>//social media has has enabled easy voicing of opinions</Text>
                </ScrollView>
                <View style={styles.checkboxContainer}>
                    <CheckBox isChecked={termsOfService} onClick={() => setTermsOfService(!termsOfService)}/>
                    <Text style={styles.checkboxText}>agree to terms of service</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox isChecked={privacyPolicy} onClick={() => setPrivacyPolicy(!privacyPolicy)}/>
                    <Text style={styles.checkboxText}>agree to privacy policy</Text>
                </View>
                <Button onPress={signUpHandler} type='white'>
                    {
                        loading ? <ActivityIndicator color='#414141'/>:
                        'continue'
                    }
                </Button>
            </BackgroundImage>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        email: state.email,
        password: state.password,
        username: state.username,
        loading: state.loading,
        error: state.error,
        token: state.token,
        policies: state.policies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (email, password, username, policies) => dispatch(actions.signUp(email, password, username, policies))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Policy);