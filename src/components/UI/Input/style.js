import { StyleSheet } from 'react-native';

import { width, height } from '../../../util/getDimensionsVariables';

const styles = StyleSheet.create({
    input:{
        width: width / 1.6,
        backgroundColor:'#fff',
        textAlign:'center',
        borderWidth:2,
        borderRadius:5,
        paddingVertical:7,
        borderColor:'#f5f5f5',
        marginVertical:15,
        fontFamily: 'KumbhSans-Regular'
    }
});

export default styles;