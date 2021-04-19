
import React, {Component} from 'react';
import { Text, View,TouchableOpacity} from 'react-native';


class Complain extends Component {

  
    render() {
      const {navigate}=this.props.navigation
      return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={styles.ButtonStyle} onPress={()=>navigate('Problem')}>  
        <Text  style={styles.TextStyle}> Report A Problem </Text>   
        </TouchableOpacity>
     

      <TouchableOpacity style={styles.ButtonStyle} onPress={()=>navigate('FeedBack')}>
      <Text style={styles.TextStyle}> FeedBack </Text> 
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
export default Complain