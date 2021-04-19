import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid
}
from 'react-native';
import firebase from 'firebase'
import Spinner from './Spinner'
import Logo from './Logo';

export default class SignUp extends Component{
    state={email:'',password:'',loading:false,errormessage:null,cnic:'',password:'',confirmpass:'',contact:''}

    renderSomething(){
        if(this.state.loading){
            return <Spinner/>
        }
        return (
            <TouchableOpacity 
            style={styles.button} 
            onPress={this.handleLogin.bind(this)}>
            <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        )
    }
    
    handleLogin = ()=>{
        const{password,confirmpass,cnic}=this.state
        if(password!==confirmpass){
            ToastAndroid.showWithGravity('Password Conflict',ToastAndroid.LONG,
            ToastAndroid.BOTTOM,25,50)
        }

        else if(password===confirmpass && cnic ===''){
            ToastAndroid.showWithGravity('Enter CNIC',ToastAndroid.LONG,
            ToastAndroid.BOTTOM,25,50)
        }
        else{
        this.setState({errormessage:'',loading:true})
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((authData)=>{
         let account={}
                account.name=this.state.name
                account.email=this.state.email
                account.cnic=this.state.cnic
                account.contact=this.state.contact
                account.uid=authData.uid
                firebase.database().ref(`/users/${authData.uid}`).set({
                    account
                })
                this.setState({password:'',cnic:'',email:'',loading:false,errormessage:''}) 
                this.props.navigation.navigate('Home')
        }) 
        .catch(this.Failed.bind(this))
        }
    }
     
         Failed(){
            console.log('Failed');
            console.log('Failed',this.state.email,this.state.password)
            this.setState({email:'',password:'',loading:false,errormessage:'Something Went Wrong'})
           
         }
        success(){
            console.log('success');
                // let account={}
                // account.email=this.state.email
                // account.cnic=this.state.cnic
                // account.contact=this.state.contact
                // account.uid=firebase.auth()

                this.setState({password:'',cnic:'',email:'',loading:false,errormessage:'',name:''}) 
                 this.props.navigation.navigate('Home')
    
    
        }
    render(){
        console.log('state',this.state)
        return(
            <View style = {styles.container}>
            <Logo />


            <TextInput 
                style={styles.inputBox}
                placeholder= "Name"
                placeholderTextColor = '#ffffff' 
                value={this.state.name}
                onChangeText={name=>this.setState({name})}/>

            <TextInput 
                style={styles.inputBox}
                placeholder= "Email"
                placeholderTextColor = '#ffffff' 
                value={this.state.email}
                onChangeText={email=>this.setState({email})}/>
            
            <TextInput 
                style={styles.inputBox}
                placeholder= "CNIC"
                placeholderTextColor = '#ffffff'
                keyboardType="numeric"
                value={this.state.cnic}
                onChangeText={cnic=>this.setState({cnic})} />

            <TextInput 
                style={styles.inputBox}
                placeholder= "Contact"
                placeholderTextColor = '#ffffff'
                keyboardType="numeric"
                value={this.state.contact}
                onChangeText={contact=>this.setState({contact})}/>
                
            <TextInput 
                style={styles.inputBox}
                placeholder= "Password"
                placeholderTextColor = '#ffffff'
                secureTextEntry={true} 
                value={this.state.password}
                onChangeText={password=>this.setState({password})}/>
                
            <TextInput 
                style={styles.inputBox}
                placeholder= "Confirm Password"
                placeholderTextColor = '#ffffff'
                secureTextEntry={true}
                value={this.state.confirmpass}
                onChangeText={confirmpass=>this.setState({confirmpass})} />

                
<Text style={{color:'#E9446A',fontSize:13,fontWeight:"600",textAlign:'center'}}>{this.state.errormessage}</Text>
           
            {this.renderSomething()}
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
