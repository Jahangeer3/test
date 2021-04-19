import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {AirbnbRating,Rating} from 'react-native-elements'
import Input from './Input'
import CardSection from './CardSection'


class Feedback extends React.Component{
    render()
    {
        return (
            <View style={{flex:1,justifyContent:'space-around'}}>
                <AirbnbRating style={{marginBottom:30}}/>
                <CardSection>
                <Input 
                style={{flex:1}}
                label="Any Comments"
                placeholder="Everything Is Best"
                multiline={true}/>
                </CardSection>
                <TouchableOpacity style={styles.ButtonStyle}>  
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
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      marginTop:150,
      borderColor:'white'
    },
    TextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
  }

export default Feedback