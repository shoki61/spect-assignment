import React from 'react';
import { TouchableOpacity, Text, Linking, Alert } from 'react-native';

import styles from './style';

const OpenUrlButton = ({url, children}) => {
    const urlHandle = async () => {
        const supported = await Linking.canOpenURL(url);
        if(supported) Linking.openURL(url);
        else {
            Alert.alert(
                'hoppoooooo',
                'bad url'
            );
        };
    };
    return (
        <TouchableOpacity onPress={urlHandle}>
            <Text style={styles.url}>{children}</Text>
        </TouchableOpacity>
    );
};

export default OpenUrlButton;