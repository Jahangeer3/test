
import React, {Component} from 'react';
import { Text, View,TouchableOpacity,ScrollView} from 'react-native';



class LostFound extends Component {

  
    render() {
          console.log(this.props)
        
      return (
           <ScrollView style={{backgroundColor:'white',paddingTop:15}}>
 <TouchableOpacity style={styles.buttonStyle}  onPress={()=>this.props.navigation.navigate('ReportLost')}> 
    <Text style={styles.textStyle}> Report Lost Items</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonStyle}  onPress={()=>this.props.navigation.navigate('FoundItem')}> 
    <Text style={styles.textStyle}> Found Item</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonStyle}  onPress={()=>this.props.navigation.navigate('ViewLost')}> 
    <Text style={styles.textStyle}> View Lost Items</Text>
</TouchableOpacity>

  <TouchableOpacity style={styles.buttonStyle}  onPress={()=>this.props.navigation.navigate('ViewFound')}> 
    <Text style={styles.textStyle}> View Found Items</Text>
</TouchableOpacity>
</ScrollView>
 )
            }
        }
        const styles={

            buttonStyle: {
                height: 60,
                borderWidth: 1,
                backgroundColor: '#0083BB',
                borderRadius: 20,
                padding:0,
                alignItems:'center',
                justifyContent:'center',
                margin:40,
                borderColor:'white'
                
         
               
            },
            textStyle:{
                  color:'white',
                  textAlign:'center',
                  fontSize:15,
                 
                  

            },
            linearGradient: {
                  flex: 1,
                  paddingLeft: 15,
                  paddingRight: 15,
                  borderRadius: 5
                },
      
      }


export default LostFound