import React, { Fragment } from 'react';
import { Text } from 'react-native';

import styles from './style';


const AuthPageTitle = props => {
    return (
        <Fragment>
            <Text style={[styles.title, !props.subTitle && {marginBottom: 25}]}>{props.title}</Text>
            { props.subTitle && <Text style={styles.subTitle}>{props.subTitle}</Text> }
        </Fragment>
    );
};

export default AuthPageTitle;