import React from 'react';
import { TextInput } from 'react-native';

import styles from './style';

const Input = ({id, onChange, placeholder, value}) => {
    return <TextInput
        style={styles.input} 
        value={value} 
        onChangeText={text => onChange({ id, text })} 
        placeholder={placeholder}
    />;
};

export default Input;