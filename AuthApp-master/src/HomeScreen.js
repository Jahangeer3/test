import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import requestCameraAndAudioPermission from './permission';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppID: '5e9c6892b873471d839ab181abc0ee7a', //Set your APPID here
      ChannelName: 'test', //Set a default channel or leave blank
    };
    if (Platform.OS === 'android') {
      //Request required permissions from Android
      requestCameraAndAudioPermission().then(_ => {
        console.log('requested!');
      });
    }
  }
  handleSubmit = () => {
    let AppID = '5e9c6892b873471d839ab181abc0ee7a';
    let ChannelName = this.state.ChannelName;
    if (AppID !== '' && ChannelName !== '') {
      this.props.navigation.navigate('Video', {AppID, ChannelName});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formLabel}>Channel Name</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={ChannelName => this.setState({ChannelName})}
          value={this.state.ChannelName}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Start Call!"
            onPress={this.handleSubmit}
            style={styles.submitButton}>
            <Text style={{color: '#ffffff'}}> Start Call </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 20,
    flex: 1,
    backgroundColor: '#17202A',
  },
  formLabel: {
    paddingBottom: 10,
    paddingTop: 10,
    color: 'whitesmoke',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  submitButton: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    backgroundColor: 'crimson',
    borderRadius: 25,
  },
  formInput: {
    height: 40,
    backgroundColor: '#f5f5f5',
    color: '#0093E9',
    borderRadius: 4,
    paddingLeft: 20,
  },
});

export default Home;
