import React from 'react'
import {View,Text,Image} from 'react-native'
import firebase from 'firebase'
import CardSection from './CardSection'


class MoreOnLost extends React.Component{


    render() {
       const {name,contact,item,itemdetails,location,avatar}=this.props.navigation.state.params;
        console.log(name,contact,item,itemdetails,location,avatar)
         return (
             <View>  
                 <CardSection>
            <Text style={styles.posters}>Poster's Name</Text> 
            <Text style={styles.original}>{name}</Text>
            </CardSection>
            <CardSection>
            <Text style={styles.posters}> Number</Text> 
            <Text style={styles.original}>{contact}</Text>
            </CardSection>
            <CardSection>
            <Text style={styles.posters}> Item Founded</Text> 
         <Text  style={styles.original}>{item}</Text>
         </CardSection>
         <CardSection>
         <Text style={styles.posters}> Item Details</Text> 
         <Text  style={styles.original}>{itemdetails}</Text>
         </CardSection>
         <CardSection>
         <Text style={styles.posters}> Location</Text> 
         <Text  style={styles.original}>{location}</Text>
         </CardSection>
         <CardSection>
         <Image style={{height:200,width:350}} source={avatar}/>
         </CardSection>
        </View>
            
           
         
        )
    }
}

const styles={
    posters:{
        fontSize:20,
        fontWeight:'bold'
    },
    original:{
        fontSize:18,
        marginLeft:15
    }
}

export default MoreOnLost; 