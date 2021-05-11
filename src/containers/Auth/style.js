import { StyleSheet } from 'react-native';

import { width, height } from '../../util/getDimensionsVariables.js';

const styles = StyleSheet.create({
    authContainer: {
        width,
        height
    },
    authBackImg: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 70,
        flex:1
    }
});

export default styles;