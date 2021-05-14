import React from 'react';
import { ImageBackground } from 'react-native';
import useKeyboardHeight from 'react-native-use-keyboard-height';

import styles from './style';


const BackgroundImage = ({source, paddingVertical, children}) => {
    const keyboardHeight = useKeyboardHeight();
    return (
        <ImageBackground source={source} style={[styles.backImg,{paddingVertical,paddingBottom:keyboardHeight !== 0 ? keyboardHeight + 50: null}]}>
            {children}
        </ImageBackground>
    );
};

export default BackgroundImage;