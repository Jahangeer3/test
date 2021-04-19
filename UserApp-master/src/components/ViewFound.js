import React from 'react'
import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import CardSection from './CardSection'


class ViewFound extends React.Component{

    state={reports:[]}
    componentDidMount(){
       firebase.database().ref(`/Found`).on('child_added',(snapshot)=>{
          let reports=snapshot.val();
        reports.index=snapshot.key
          this.setState((prevState)=>{
               return {
                   reports:[...prevState.reports,reports]
               }
          })  
       })
    }

    renderRow = ({item})=>{
        console.log(this.props)
        return (
            <CardSection>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('MoreOnLost',
            {name:item.name,contact:item.contact,item:item.item,
            itemdetails:item.itemdetails,location:item.location,avatar:item.avatarSource})}>
                <Text style={{fontSize:20}}>{item.item}</Text>
            </TouchableOpacity>
            </CardSection>
        )
    }
    render() {
        console.log('reports',this.state.reports,this.props,'props')
         return (
             <View>  
             <FlatList
             data={this.state.reports}
             renderItem={this.renderRow}
            keyExtractor={(item)=>item.index}
             />     
            </View>
            
           
         
        )
    }
}


export default ViewFound