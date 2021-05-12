import React from 'react';
import { TextInput } from 'react-native';

import styles from './style';

const Input = props => {
    return <TextInput style={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>;
};

export default Input;