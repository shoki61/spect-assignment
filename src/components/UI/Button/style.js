import { StyleSheet } from 'react-native';

import { width } from '../../../util/getDimensionsVariables';

const styles = StyleSheet.create({
    button: {
        width: width / 1.6,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical: 13,
        borderRadius:5,
        elevation:100,
        marginVertical:15
    },
    white: {
        backgroundColor: '#fff'
    },
    dark: {
        backgroundColor: '#363636'
    },
    buttonText:{
        fontSize: 16,
        fontFamily: 'KumbhSans-Regular'
    },
    whiteText: {
        color:'#fff'
    },
    darkText: {
        color: '#363636'
    }
});

export default styles;