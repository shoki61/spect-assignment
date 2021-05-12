import { StyleSheet } from 'react-native';

import { width, height } from '../../util/getDimensionsVariables';

const styles = StyleSheet.create({
    loginContainer:{
        width,
        height
    },
    backImg:{
        flex:1,
        alignItems: 'center',
        paddingVertical:25
    },
    loginTitle:{
        fontSize:18,
        color:'#363636'
    }
});

export default styles;