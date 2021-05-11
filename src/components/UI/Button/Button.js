import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './style';

const Button = props => (
    <TouchableOpacity 
        style={[styles.button,styles[props.type]]} 
        onPress={props.onPress}
    >
        <Text style={[styles.buttonText , props.type === 'dark' ? styles.whiteText : styles.darkText]}>{props.children}</Text>
    </TouchableOpacity>
);

export default Button;