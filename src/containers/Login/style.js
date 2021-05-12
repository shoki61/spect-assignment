import { StyleSheet } from 'react-native';

import { width } from '../../util/getDimensionsVariables';


const styles = StyleSheet.create({
    loginContainer:{
        width
    },
    backImg:{
        flex:1,
        alignItems: 'center',
        paddingVertical:25,
        justifyContent:'space-between'
    },
    loginContent:{
        alignItems:'center'
    },
    loginTitle:{
        fontSize:18,
        color:'#363636',
        marginVertical:20
    },
    loginForgotButton:{
        color: '#777',
        textDecorationLine:'underline',
        marginVertical:20
    }
});

export default styles;