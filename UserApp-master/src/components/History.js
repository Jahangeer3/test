import React from 'react'
import {View,Text, ScrollView} from 'react-native'
import firebase from 'firebase'
import MoreHistory from './MoreHistory';

class History extends React.Component{

    constructor() {
        super();
        this.state = {
          History: {},
          presentHistory: '',
        };
      }
    componentDidMount(){
        firebase.database().ref(`alerts2/${firebase.auth().currentUser.uid}`).on('value',snapshot => {
            let data = snapshot.val() ? snapshot.val() : {};
            let HistoryItems = {...data};
            this.setState({
                History: HistoryItems,
              });         
        })
    }

    render()
    {
        let keys=Object.keys(this.state.History)
        console.log(keys,'keys');
        
        return ( 
            <ScrollView>
            {keys.length > 0 ? (
              keys.map(key =>(
                 <MoreHistory
                 key={key}
                 HistoryItem={this.state.History[key]}
                 />
              ))
              
            ) : (
                <View style={{flex:1,alignItems:'center',marginTop:250}}> 
                  <Text style={{fontSize:20,fontWeight:'bold'}}>No Alerts Send So far</Text>
                  </View>
            )}
          </ScrollView>
        ) 
    }
}

export default History