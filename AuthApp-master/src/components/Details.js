import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ToastAndroid,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import {NodePlayerView} from 'react-native-nodemediaclient';
import {Button} from 'react-native-elements';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      done: 1,
      uid: '',
      responders: [],
      ip: '',
      flag: true,
    };
  }
  componentDidMount() {
    console.log('i am here');

    firebase
      .database()
      .ref()
      .on('value', (snapshot) => {
        this.setState({responders: snapshot.val().responses});
        this.setState({ip: snapshot.val().ip_cameras});
      });

    this.setState({uid: firebase.auth().currentUser.uid});
  }

  componentDidUpdate() {
    setTimeout(() => {
      firebase
        .database()
        .ref()
        .on('value', (snapshot) => {
          this.setState({ip: snapshot.val().ip_cameras});
          console.log(snapshot.val().ip_cameras, 'response generated');
        });
    }, 4002);
  }

  waitToShift = () => {
    let AppID = '5e9c6892b873471d839ab181abc0ee7a';
    let ChannelName = 'test';

    if (AppID !== '' && ChannelName !== '') {
      console.log(AppID, ChannelName, 'papappappapapap');

      this.props.navigation.navigate('ABC', {AppID, ChannelName});
    }
  };
  alertDone = (name, type, longitude, latitude, id, flag) => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    if (this.state.done === 1) {
      ToastAndroid.showWithGravity(
        'You Have Responsed To Alert.!!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        this.setState({done: 2}, () => console.log(this.state)),
      );

      firebase.database().ref(`/responses/${id}/${this.state.uid}`).push({
        name,
        type,
        date,
        month,
        hours,
        sec,
        min,
        longitude,
        latitude,
        flag,
      });
      this.props.navigation.navigate('Responded', {id: id});
    } else if (
      this.state.done === 2 &&
      firebase.auth().currentUser.uid != this.state.uid
    ) {
      ToastAndroid.showWithGravity(
        `Already Responded,Connect With Nearest Cop,You are number ${this.state.done}`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        this.setState({done: 2}, () => console.log(this.state)),
      );
    } else {
      ToastAndroid.showWithGravity(
        `You Have Already Responded`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        this.props.navigation.navigate('Responded', {id: id}),
      );
    }
  };

  checkImage(image) {
    if (image) {
      //console.log('in if')
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{height: 400, width: 350}}
            source={{uri: `data:image/png;base64,${image}`}}
          />
        </View>
      );
    } else {
      //console.log('in else')
      return (
        <View>
          <Text style={{marginLeft: 25, fontSize: 20}}> No Image Received</Text>
        </View>
      );
    }
  }

  render() {
    const {
      name,
      type,
      image,
      longitude,
      latitude,
      id,
      flag,
    } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Text style={{fontSize: 20, padding: 0, margin: 0}}>
          {' '}
          Image Received From Sender{' '}
        </Text>
        {this.checkImage(image)}
        <Text style={{fontSize: 20, padding: 0, margin: 0}}>Area</Text>
        <Text style={{marginLeft: 25, fontSize: 20}}>{name}</Text>

        <Text style={{fontSize: 20, padding: 0, margin: 0}}>Type</Text>
        <Text style={{marginLeft: 25, fontSize: 20}}>{type}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {/* <Image source ={require('../../image/image.jpg')}  style={{width:500,height:250}}/> */}
          {/* {console.log(this.state.ip.IP,"Before node player")} */}
          <NodePlayerView
            style={{height: 310, width: 1000}}
            ref={(vp) => {
              this.vp = vp;
            }}
            inputUrl={this.state.ip.IP}
            scaleMode={'ScaleAspectFit'}
            bufferTime={300}
            maxBufferTime={1000}
            Muted
            autoplay={true}
          />
        </View>
        {/* <TouchableOpacity>
          <Button
            type="solid"
            title="Respond"
            buttonStyle={{
              marginTop: 50,
              borderRadius: 20,
              width: 300,
              marginLeft: 300,
            }}
            onPress={this.alertDone.bind(
              this,
              name,
              type,
              longitude,
              latitude,
              id,
              this.state.flag,
            )}
          />
        </TouchableOpacity> */}
        <Button title="yaya" onPress={() => this.waitToShift()} />
      </ScrollView>
    );
  }
}

export default Details;
