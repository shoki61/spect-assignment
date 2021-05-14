import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './style';


const BackgroundImage = ({source, paddingVertical}) => (
    <ImageBackground source={source} style={[styles.backImg,{paddingVertical}]}>
        {props.children}
    </ImageBackground>
);

export default BackgroundImage;