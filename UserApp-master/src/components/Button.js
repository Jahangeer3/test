import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, errorFlow }) => {
    return (
        <TouchableOpacity style={[styles.ButtonStyle, (errorFlow) && { borderColor: '#fff' }]} onPress={onPress}>
            <Text style={[styles.TextStyle, (errorFlow) && { color: '#fff' }]} >{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    ButtonStyle: {
        borderWidth: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#b81456',
        borderRadius: 7,
        backgroundColor:'#330101',
        elevation:3, 
        alignSelf:'center'
    },
    TextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
}
export default Button;