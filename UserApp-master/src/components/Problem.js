import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Input from './Input'
import CardSection from './CardSection'
class Problem extends React.Component{
    render()
    {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'space-between'}}>
          
                <Input 
                label="Problem"
                 placeholder="Complain"
                 multiline={true}
                 numberOfLines={4}
                 style={{flex:1}}
                />
                <Input
                 label="Area"
                 placeholder="Garden East"
                 multiline={true}
                 numberOfLines={4}
                 style={{flex:1}}
                 />
                    <TouchableOpacity style={styles.ButtonStyle} >  
        <Text  style={styles.TextStyle}> Submit</Text>   
        </TouchableOpacity>
             
            </View>
        )
    }
}
const styles = {
    ButtonStyle: {
      height: 60,
      borderWidth: 1,
      backgroundColor: '#0083BB',
      borderRadius: 10,
      width:'90%',
      alignItems:'center',
      justifyContent:'center',
      margin:80,
      borderColor:'white'
    },
    TextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
  } 

export default Problem