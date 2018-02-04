import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import FirstScreen from './Screens/FirstScreen';
import Home from './home';
import SecondScreen from './Screens/SecondScreen';
import ThirdScreen from './Screens/ThirdScreen';
import FourthScreen from './Screens/FourthScreen';
import balod from './Districts/balod'
import bastar from './Districts/bastar'
import { Font, AppLoading } from 'expo'




export default class abc extends React.Component{

  state = {
    fontLoaded: false,
  }
  componentWillMount() {
    this.loadAssets()
      .then(() => this.setState({ fontLoaded: true }));
  }

  async loadAssets() {
    await Font.loadAsync({
      'Roboto_medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    });
  }



  render(){
    return(
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="WELCOME"/>
          <Scene key="first" component={FirstScreen} title="HOME"/>
          <Scene key="second" component={SecondScreen} title="DISTRICTS"/>
          <Scene key="third" component={ThirdScreen} title="AUTHORITIES"/>
          <Scene key="fourth" component={FourthScreen} title="HELP"/>
          <Scene key="balod" component={balod} title="Balod"/>
          <Scene key="bastar" component={bastar} title="Bastar"/>
          
          
          
          
        </Stack>
      </Router>
    )
  }
} 