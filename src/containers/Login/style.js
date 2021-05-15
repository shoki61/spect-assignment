import { StyleSheet } from 'react-native';

import { width } from '../../util/getDimensionsVariables';


const styles = StyleSheet.create({
    loginContainer:{
        width
    },
    loginContent:{
        alignItems:'center'
    },
    loginForgotButton:{
        color: '#777',
        textDecorationLine:'underline',
        marginVertical:20,
        fontFamily: 'KumbhSans-Regular'
    }
});

export default styles;