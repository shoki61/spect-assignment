import { StyleSheet } from 'react-native';

import { width } from '../../util/getDimensionsVariables';


const styles = StyleSheet.create({
    policyContainer:{
        width,
    },
    infoContainer:{
        width: width - 60,
        backgroundColor:'#2e2e2e',
        borderRadius:5,
        flex:1,
        paddingHorizontal:15,
        marginBottom:30
    },
    infoTitle:{
        color:'#fff',
        fontSize: 28,
        textAlign:'center',
        marginVertical:10,
        lineHeight:45,
        fontFamily: 'KumbhSans-Bold'
    },
    infoText: {
        color: '#fff',
        fontSize:15,
        marginVertical:20,
        lineHeight:30,
        textDecorationLine: 'none',
        fontFamily: 'KumbhSans-Regular'
    },
    checkboxContainer: {
        flexDirection:'row',
        width: width - 60,
        marginVertical:7
    }
});

export default styles;