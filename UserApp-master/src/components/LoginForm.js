import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
}

from 'react-native';
import {Button} from 'react-native-elements'
import firebase from 'firebase'
import Spinner from './Spinner'
import Logo from './Logo';

export default class LoginForm extends Component{
    state={email:'',password:'',loading:false,errormessage:null}


    handleLogin = ()=>{
        this.setState({errormessage:'',loading:true})
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.success.bind(this))
        .catch(this.Failed.bind(this))
        } 
         Failed(){
            console.log('Failed');
            console.log('Failed',this.state.email,this.state.password)
            this.setState({email:'',password:'',loading:false,errormessage:'Authentication Failed'})
           
         }
        success(){
            console.log('success');
            
                this.setState({password:'',loading:false,errormessage:''}) 
                 this.props.navigation.navigate('Home')
    
    
        }
    
    renderSomething(){
        if(this.state.loading){
            return <Spinner/>
        }
        return (
            <TouchableOpacity 
            style={styles.button} 
            onPress={this.handleLogin.bind(this)}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        )
    }
    render(){
        console.log('props',this.state)
        return(
            <View style = {styles.container}>
                <Logo />
                <TextInput 
                style={styles.inputBox}
                placeholder= "Email"
                placeholderTextColor = '#ffffff' 
                value={this.state.email}
                onChangeText={email=>this.setState({email})}
                />
            
            <TextInput 
                style={styles.inputBox}
                placeholder= "Password"
                placeholderTextColor = '#ffffff'
                secureTextEntry={true} 
                value={this.state.password}
                onChangeText={password=>this.setState({password})}
                />

<Text style={{color:'#E9446A',fontSize:13,fontWeight:"600",textAlign:'center'}}>{this.state.errormessage}</Text>
      
            {this.renderSomething()}
           <View style={{flex:1,flexDirection:'row'}}>
               <Text>Don't Have An Account ?</Text>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                 <Text style={{fontWeight:'bold'}}>Sign Up</Text>
             </TouchableOpacity>
          
           </View>
           <Button
           onPress={()=>this.props.navigation.navigate('UserManual')}
           title="User Manual"
           buttonStyle={{marginBottom:120,width:200,backgroundColor:'#512DA8'}}
          />
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container : {
      backgroundColor: '#2196f3',
      flex : 1,  
      alignItems:'center',
      justifyContent:'center'
    },

    inputBox:{
        width:300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius : 25,
        paddingHorizontal : 16,
        fontSize : 16,
        marginVertical : 10

    },


    button : {
        
        width:300,
        backgroundColor: '#000000',
        borderRadius : 25,
        marginVertical:10,
        paddingVertical : 12

    },

    buttonText:{
        fontSize : 16,
        fontWeight : '500',
        color : '#ffffff',
        textAlign: 'center'        
    }
  });