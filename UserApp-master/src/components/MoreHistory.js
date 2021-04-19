import React from 'react'
import {View,Text, Image,ScrollView} from 'react-native'
import firebase from 'firebase'
import moment from 'moment'


const MoreHistory = ({HistoryItem}) =>{
   const{place_name,SenderName,date,month,min,hours,sec}=HistoryItem
   const day=moment(date).format("dddd")
   const time=moment.utc(`${hours,min,sec}`).startOf('seconds').fromNow()

   
        
        return (
    <ScrollView style={{borderWidth:1,margin:5,padding:5}}>
       
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>
               UserName {SenderName}
            </Text>
            <Text style={{fontSize:15,fontWeight:'bold'}}>
               Date {date}/{}/{6}/2020
            </Text>
           
    </View>
    <Text style={{marginTop:10,marginLeft:2,fontWeight:'bold',fontSize:18}}>Place Name</Text>
    <Text>{place_name}</Text>
      
    </ScrollView>
        )
    

}

export default MoreHistory
