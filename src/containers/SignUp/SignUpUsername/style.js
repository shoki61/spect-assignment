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
    }
});

export default styles;