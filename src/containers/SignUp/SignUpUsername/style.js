import { StyleSheet } from 'react-native';

import { width } from '../../../util/getDimensionsVariables';

const styles = StyleSheet.create({
    signUpContainer:{
        width
    },
    backImg:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:25,
        paddingHorizontal:15
    },
    title:{
        fontSize:18,
        color:'#363636',
        marginTop:20,
    },
    signUpInfo:{
        color:'grey',
        fontSize:13,
        marginTop:10,
        marginBottom:40,
        textAlign:'center'
    }
});

export default styles;