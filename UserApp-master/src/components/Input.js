import React,{Component} from 'react';
import {View,TextInput,Text} from 'react-native';


const Input = ({label,value,onChangeText,placeholder,secureTextEntry,keyboardType,maxLength
    ,multiline,numberOfLines}) =>{
  return (
      <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}> { label } </Text>
   <TextInput
     
       placeholder={placeholder}
       autoCorrect={false}  
       style={styles.inputStyle}
       value={value}
       onChangeText={onChangeText}
       secureTextEntry={secureTextEntry}
       keyboardType={keyboardType}
       maxLength={maxLength}
       multiline={multiline}
       numberOfLines={numberOfLines}
       />
      </View>
  )
}

const styles ={
 inputStyle:{
     color:'#000',
     paddingRight:5,
     paddingLeft:5,
     fontSize:18,
     lineHeight:23,
     flex:2,
     alignItems:'stretch', 
     marginRight:5
 },
    labelStyle:{
        color:'black',
        fontWeight: '600',
        fontSize:18,
        paddingLeft:20,
        flex:1,
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },

};

export default Input;