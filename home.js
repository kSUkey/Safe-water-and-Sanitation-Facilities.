import React from 'react';
import { Alert, Animated, StyleSheet, Text, View, Image } from 'react-native';
import {Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class FadeInView extends React.Component {
  _onPressButton() {
    Alert.alert('You liked it.')
  }


  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 3000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'http://coretvnews.com/wp-content/uploads/2016/11/water-tap.jpg'
    };
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 320, height: 500, backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 38, textAlign: 'center', margin: 10}}>
          {'\n'}
          Safe Water and Sanitation Facilities
          {'\n'}
          </Text>
          <Image source={pic} style={{width: 320, height: 200}}/>
        <Text>
        {'\n'}
        </Text>
        <Button full info
        onPress={() => {
          Actions.first();
        }}>
            <Text>Start</Text>
          </Button>
        </FadeInView>        
      </View>
    )
  }
}
