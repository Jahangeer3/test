import React,{Component} from 'react';
import {View,Image,ScrollView,ToastAndroid} from 'react-native'
import CardSection from './CardSection'
import Input from './Input'
import ImagePicker from 'react-native-image-picker'
import Button from './Button'
import firebase from 'firebase';
import uid from 'uid'


const options = {
    title: 'Select Avatar',
    takePhotoButtonTitle:'Take photo from camera',
    chooseFromLibrary:'choose photo from lib'
   }

class FoundItem extends Component{
   
   state ={ name: '', contact:'', item: '', itemdetails: '',location: '',avatarSource:null};

   submit(){

    const {name,contact,item,itemdetails,location,avatarSource} = this.state
    console.log(name,contact,item,itemdetails,location,avatarSource)
    if(name!==''&&contact!==''&&item!==''&&itemdetails!==''&&location!=='',avatarSource!==null){
            let index=uid()
firebase.database().ref(`/Found/${index}`).set({name,contact,item,itemdetails,location,avatarSource})
console.log(index,'val of index')
this.setState({name:'',contact:'',item:'',itemdetails:'',location:'',avatarSource:null})
ToastAndroid.showWithGravity('Successfully Added In Found List',ToastAndroid.LONG,
ToastAndroid.BOTTOM,25,50)
this.props.navigation.goBack()
    }
    else {
        ToastAndroid.showWithGravity('Please Insert All Details',ToastAndroid.LONG,
        ToastAndroid.BOTTOM,25,50)
    }
     
       
}
  

   selectImage = () =>{
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
       
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }  else {
          const source = { uri: response.uri };
       
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
       
          this.setState({
            avatarSource: source,
          });
        }
      });
   }

   render()
    {
    console.log(this.state.avatarSource,this.state.avatarSource,'frender',this.props)
      
        return(
            <ScrollView style={styles.containerStyle}>
                <CardSection>

                    <Input
                    placeholder="Name"
                    label='Name'
                    value={this.state.name}
                    keyboardType={'default'}
                    onChangeText={name => this.setState({name})}
                    />

                </CardSection>

                <CardSection> 

                    <Input
                    placeholder="03xxxxxxxxx"
                    label='Contact no'
                    keyboardType='numeric'
                    value={this.state.contact}
                    onChangeText={contact => this.setState( {contact})}
                    maxLength={11}
                
                
                    
                    />
  
                    
                    

                </CardSection>
                
                
                <CardSection> 

                    <Input
                    placeholder='ID card, document '
                    label='Item Name'
                    value={this.state.item}
                    onChangeText={item => this.setState({item})}
                    
                    />

                </CardSection>
                
                
                <CardSection> 

                    <Input
                    placeholder=' '
                    label='Item Details'
                    value={this.state.itemdetails}
                    onChangeText={itemdetails => this.setState({itemdetails})}
                    
                    />

                </CardSection>
                
                <CardSection> 

                    <Input
                    placeholder='Area'
                    label='Location'
                    value={this.state.location}
                    onChangeText={location => this.setState({location})}
                    
                    />

                </CardSection>

                <View >
          { this.state.avatarSource && <Image source={this.state.avatarSource}  style={{width:'100%',height:500}}/> }
                </View>

                <CardSection>
                  
              
              <Button onPress={this.selectImage}>
                   Upload Image
               </Button>
               
                </CardSection>

                <CardSection>
                    <Button onPress={this.submit.bind(this)}>
                        Submit
                    </Button>
                </CardSection>
                </ScrollView>
        )
    }


}
const styles={
containerStyle:{

   
    borderRadius:2,
    borderBottomWidth:0,
    shadowRadius:2,
    shadowOpacity:0.1,
    shadowColor:'#000',
    shadowOffset:{width:0 , height:2},
    elevation:1,
    marginRight:5,
    marginTop:10,
    marginleft:5,
    
}
}

export default FoundItem;