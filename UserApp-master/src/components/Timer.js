import React from 'react'
import {View,Text,BackHandler} from 'react-native'

class Timer extends React.Component{

    state={count:300}

    componentDidMount(){
        this.myinterval=setInterval(()=>{
            this.setState({
                count:this.state.count - 1
                
            })
        },1000)
        
    }

 

render()
    {
        
      if(this.state.count==0)
      {
         return (
            clearInterval(this.myinterval), 
            this.props.navigation.goBack(null)
         )
      }
      else
      {
        return (
    <View style={{justifyContent:'center',alignItems:'center'}}> 
     <Text style={{fontSize:20}}> Thankyou For Your Response</Text> 
     <Text style={{fontSize:20}}>You Will be Able to Send Alert Again In</Text>   
     <Text style={{fontSize:20}}> {this.state.count} Seconds</Text>
     </View>
        )
    }
}
}

export default Timer