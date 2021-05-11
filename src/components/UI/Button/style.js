import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    button: {
        width: width / 1.7,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical: 13,
        borderRadius:5,
        elevation:100
    },
    white: {
        backgroundColor: '#fff'
    },
    dark: {
        backgroundColor: '#2e2e2e'
    },
    buttonText:{
        fontSize: 16
    },
    whiteText: {
        color:'#fff'
    },
    darkText: {
        color: '#2e2e2e'
    }
});

export default styles;