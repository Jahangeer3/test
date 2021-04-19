import React, {Component} from 'react';
import { Text, View,BackHandler,DeviceEventEmitter,Picker,ToastAndroid, Alert,Linking,TouchableOpacity} from 'react-native';
import CardSection from './CardSection'
import {Button} from 'react-native-elements'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import firebase from 'firebase';
import Geolocation from 'react-native-geolocation-service'
import axios from 'axios'
import call from 'react-native-phone-call'  
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker'
import Spinner from './Spinner';
import uid from 'uid';

class Home extends Component{

    state = {
    initialPosition: 'unknown',
    latitude:24,
    longitude:67,
    type:'',
    button:true,
    second:300,
    place_name:'',
    load:false,
    base64:'',
    id:'',
 
};


constructor(props){
  super(props);
  this.state={
    phone:'03342989198',
    SenderName:'',
    SenderCNIC:'',
    SenderContact:'',
    flag:true
 
  }

}

componentDidMount() {
    
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
        message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
        ok: "YES",
        cancel: "NO",
        enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
        showDialog: true, // false => Opens the Location access page directly
        openLocationServices: true, // false => Directly catch method is called if location services are turned off
        preventOutSideTouch: false, //true => To prevent the location services popup from closing when it is clicked outside
        preventBackClick: false, //true => To prevent the location services popup from closing when it is clicked back button
        providerListener: true // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
    }).then(function(success) {
        // success => {alreadyEnabled: true, enabled: true, status: "enabled"} 
           Geolocation.getCurrentPosition((position) => {
            console.log(position,'i am position')
            let initialPosition = JSON.stringify(position);
            this.setState({ initialPosition,latitude:position.coords.latitude,longitude:position.coords.longitude });
            }, error => console.log(error), { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
        }.bind(this)
    ).catch((error) => {
        console.log(error.message);
    });
    
    BackHandler.addEventListener('hardwareBackPress', () => { //(optional) you can use it if you need it
           LocationServicesDialogBox.forceCloseDialog();
    });
    
    DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
        console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
    });
    {this.renderUserData()}
    // renderUserData()

  }

componentWillUnmount() {
    // used only when "providerListener" is enabled
    LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener.
}

renderUserData= ()=>{
  console.log('insdie user Data');
      firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).once('value').then((snapshot) => {
    //   let updatedUser = snapshot.val();
    // this.cnic=updatedUser.cnic
    // console.log( this.cnic,'cinic');
    
    let Name = snapshot.val().account.name
    let CNIC = snapshot.val().account.cnic
    let contact =snapshot.val().account.contact

    // let arr = this.state.arrUser
    // arr.push({ Name, CNIC, contact})
    // this.setState({arrUser: arr})
    this.setState({SenderCNIC:CNIC,SenderName:Name,SenderContact:contact})
}).catch(err=> console.log(err));
    
      // console.log(updatedUser,'userrr');
      // this.setState({Complete:updatedUser})
      // console.log(this.state.Complete,'comple');
      
      
 
}

renderCancle(){
  console.log('in cancle')
   {this.props.navigation.navigate('Timer')}
}

renderSpinner(){
  if(this.state.load)
  {
    return <Spinner size="small"/>
  }
}

renderPicker=()=> {
 
  const { longitude,type,place_name} = this.state
  console.log(' i am renderpick',this.state.type)
  if(type==undefined||type=='PL'){
    return (
      ToastAndroid.showWithGravity('Please Specify Type',ToastAndroid.LONG,
      ToastAndroid.BOTTOM,25,50)
)}

else if(place_name==undefined||longitude==undefined)
{
  return (
    console.log(place_name),
    ToastAndroid.showWithGravity('Please Wait Location Is Loading',ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50)
  )
}

else {
return ( 

Alert.alert(
  'Your Alert Will Be Sent From',
  this.state.place_name,
  [
     {text: 'Send Alert', onPress:this.sendAlert.bind(this)},
    {
      text: 'Go Back',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },

  
  ],
  {cancelable: false}
)

)
}
}

sendAlert=()=>{
  var date=new Date().getDate()
  var month= new Date().getMonth()+1
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  this.setState({id:uid()})
  console.log(this.state.id);
  const{SenderContact,SenderCNIC,SenderName}=this.state
  

  const { id,longitude,latitude,type,place_name,base64,flag} = this.state
  if(base64!=undefined) {
console.log('if',base64);

  ToastAndroid.showWithGravity('Alert Sent Successfully',ToastAndroid.LONG,
ToastAndroid.BOTTOM,25,50),

firebase.database().ref(`/alerts2/${firebase.auth().currentUser.uid}`).push
({id,longitude,latitude,place_name,type,base64,SenderContact,SenderCNIC,SenderName,date,month,hours,min,sec})
firebase.database().ref(`/alerts`).push
({id,longitude,latitude,place_name,type,base64,SenderContact,SenderCNIC,SenderName,date,month,hours,min,sec,flag})
  }
  else 
  {
    
    console.log('else',base64);
    ToastAndroid.showWithGravity('Alert Sent Successfully Without Image',ToastAndroid.LONG,
    ToastAndroid.BOTTOM,25,50),
    firebase.database().ref(`/alerts2/${firebase.auth().currentUser.uid}`).push
    ({id,longitude,latitude,place_name,type,SenderContact,SenderCNIC,SenderName,date,month,hours,min,sec})
    firebase.database().ref(`/alerts`).push
    ({id,longitude,latitude,place_name,type,SenderContact,SenderCNIC,SenderName,date,month,hours,min,sec,flag})
  }

Alert.alert(
  'ThankYou For Alert',
  'Please Select',
  
  
  [
     {text: 'Start Streaming', onPress: () =>console.log('hi')},
    {
      text: 'Cancle',
      onPress: () => {this.renderCancle.bind(this)},
      style: 'cancel',
    },

  
  ],
  {cancelable: false}
)
}




 getLocationName = () => {

   console.log('inside getlo',this.state.longitude)
  axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.longitude},${this.state.latitude}.json?access_token=pk.eyJ1IjoiYW5hcy1raGFuIiwiYSI6ImNqdGJ6dmx3dTBweWM0YXF0N2VjcXAxYmIifQ.pdr4GuF6AYqY61r8UvUdDQ`)
    .then((res) => 
    { 
      console.log(res)
      const { place_name } = res.data.features[0]
      if(res.data.features[3].place_name=="Pakistan")
      {
            console.log('i am place name val',place_name)
            this.setState({ place_name })
    }}
   )
 }

 pickImage =()=>{
  console.log('Inside PickImage FUnction')
    ImagePicker.showImagePicker({takePhotoButtonTitle:'Take Photo(Not Blur)'},res=>{
        if(res.didCancel){
            console.log('User Canclled');
        }
        else if(res.error)
        {
            console.log('Error',res.error)
        }   
        else{
          console.log('1 console')
            this.setState({
                pickedImage:{uri:res.uri},
                base64:res.data
            }),()=> console.log('else in pick',this.state.base64)
        }
    })
   
}

callPolice() {
  const args = {
    number: '15', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
call(args)
}

callAmbulance() {
  const args = {
    number: '021111111134', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
call(args).catch(console.error)
}

callFire() {
  const args = {
    number: '911', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
call(args).catch(console.error)
}

render() {

const {place_name,longitude,latitude,base64} = this.state
console.log('irease',this.state);


if(this.state.initialPosition==='unknown' && this.state.second=='300')
{
 return (
  <View style={{justfiyContent:'center',alignItems:'center',flex:1}}> 
 <Text style={{fontSize:20,textAlign:'center',alignItems:'center',justifyContent:'center'}}>Loading Location
 </Text>  
 </View>
 )}
 

else  {
       if(this.state.second==280||this.state.latitude!=0)
       {
       return (  
       <View>  

        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
  <View style={{marginLeft:20}}>
        <TouchableOpacity onPress={this.pickImage}>
     <Icon name="camera"
           size={50}
           color='blue'/>
   
      </TouchableOpacity>
      <Text style={{fontWeight:'600',fontSize:20,marginTop:15,marginLeft:-25,marginBottom:150}}>Take Image</Text>
      </View>

      <View style={{marginLeft:20}}>
        <TouchableOpacity onPress={this.callPolice}>
     <Icon name="car"
           size={50}
           color='grey'/>
     </TouchableOpacity>
      <Text style={{fontWeight:'600',fontSize:20,marginTop:15,marginLeft:-25}}> Call Police</Text>
      </View>
      </View>
   

      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
  <View style={{marginLeft:20}}>
        <TouchableOpacity onPress={this.callAmbulance}>
     <Icon name="ambulance"
           size={50}
           color='green'/>
   
      </TouchableOpacity>
      <Text style={{fontWeight:'600',fontSize:20,marginTop:15,marginLeft:-25}}>Call Ambulance</Text>
      </View>

      <View style={{marginLeft:30}}>
        <TouchableOpacity onPress={this.callFire}>
     <Icon name="fire"
           size={50}
           color='red'
           style={{marginLeft:22}}/>
     </TouchableOpacity>
      <Text style={{fontWeight:'600',fontSize:20,marginTop:15,marginLeft:-25}}>Call Fire-Brigade</Text>
      </View>
     </View>

     <View style={{marginTop:500,position:'absolute',padding:0,left:0,right:0,flex:1}}>
         <View style={{alignItems:'center',justifyContent:'center'}}>
    <CardSection>
    <Text style={styles.TextStyle}>Type</Text>
   <Picker
    style={{ flex:2 }}
    selectedValue={this.state.type}
    onValueChange={(itemValue,itemIndex) => this.setState({type:itemValue},this.getLocationName)}>

    <Picker.Item  label="Please Specify" value="PL"/>
   <Picker.Item  label="Accident" value="Accident"/>
   <Picker.Item  label="Snatching"  value="Snatching"/>
   <Picker.Item  label="Firing" value="Firing"/>
   <Picker.Item  label="Child Abuse"  value="Child_Abuse"/>
   <Picker.Item  label="Kidnapping" value="Kidnapping" />
    </Picker>
   </CardSection>
   </View>
     <Button 
         title='Alert'
         buttonStyle={styles.buttonStyle} 
         onPress={this.renderPicker.bind(this)}
            />
 </View>
          </View>
           );
    }
}
  }
}

  
  
   


const styles={

    buttonStyle: {
        height: 50,
        borderWidth: 1,
        borderColor: "#b81456",
        elevation: 2,
        backgroundColor: '#330101',
        borderRadius: 10,
 
       
    },
  
    mapStyle:{
        flex:1,
        justfiyContent:'center',
        alignItems:'center'
    },
    map: {
     width:'100%',
     height:'100%'

    },
    TextStyle: {
      color: '#11c6c0',
      fontWeight: '600',
      fontSize: 18,
      paddingLeft: 20,
      paddingBottom: 5,
      flex: 1,
      marginTop: 12
  },
}

export default Home;