import React from 'react';
import { Image } from 'react-native';
import { Container, Title, Fab, FooterTab, Footer, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
import { Actions} from 'react-native-router-flux';

export default class FirstRoute extends React.Component{
    render(){
        let pic = {
            uri: 'http://www.kidcareshare.com/content/wp-content/uploads/2017/09/helpwanted.jpg'
          };
        
        return(
            
            <Container>
                <View>
                    <Text>
                        <Image source={pic} style={{width: 320, height: 250}}/>
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        {'\n'}                        
                        {'\n'}                                              
                        Call Toll Free Number: 1800-9800-9800
                        {'\n'}                        
                        {'\n'}                        
                        {'\n'}                        
                        {'\n'}  
                    </Text>
                </View>

            <Footer>
          <FooterTab>
            <Button
            onPress={() => {
              Actions.first();
            }}>
              <Icon name="home" />
            </Button>
            <Button
            onPress={() => {
                Actions.second();
              }}>
              <Icon name="navigate" />
            </Button>
            <Button 
            onPress={() => {
          Actions.third();
        }}>
              <Icon name="people" />
            </Button>
            <Button active>
              <Icon active name="alert" />
            </Button>
          </FooterTab>
        </Footer>
        </Container>
        )
    }
}