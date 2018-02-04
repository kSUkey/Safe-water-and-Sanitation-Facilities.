import React from 'react';
import { Image } from 'react-native';
import { Container, Title, Fab, FooterTab, Footer, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
import {Actions} from 'react-native-router-flux';


export default class FirstRoute extends React.Component{
    constructor() {
        super()
        this.state = {
          active: ''
        };
      }

    render() {
        return(
            <Container>
       
        
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://cgswc.cg.gov.in/Image/cglogo.png'}} />
                <Body>
                  <Text>WSSO, Chhattisgarh</Text>
                  <Text note> Februray 3, 2017</Text>
                </Body>
              </Left>
            </CardItem>
        
            <CardItem>
              <Body>
                <Image source={{uri: 'https://sanitationupdates.files.wordpress.com/2012/04/swa-logo-1280x768.jpg'}} style={{height: 200, width: 300, flex: 1}}/>
                <Text>
                The goal of WSSO is to provide every rural person with adequate safe water for
                drinking, cooking and other domestic basic needs on a sustainable basis. This basic
                requirement should meet minimum water quality standards and be readily and
                conveniently accessible at all times and in all situations.
                Many areas of groundwater and surface water are now contaminated with heavy
                metals, POPs (persistent organic pollutants), and nutrients that have an adverse
                affect on health. Water-borne diseases and water-caused health problems are
                mostly due to inadequate and incompetent management of water resources. Safe
                water for all can only be assured when the resources are properly managed,
                handled and time to time safety precautions are applied and monitored with the
                help of technology and local resources.
                With the vision of Safe drinking water and sanitation facilities for all, at door step, at
                all times, WSSO intends to design and develop a state-of the art dynamic web-portal.
                This will serve to both the administrative staff of WSSO and common people. The
                web-portal will be as per the information made available by WSSO. This will provide
                a communication pathway for the common people to get the information about the
                functioning of the organisation. Also, the web-portal will be linked with the other
                concerned establishments. Efficient and Interactive sharing of information will be the
                main objective behind this web-portal.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button opaque textStyle={{color: '#87838B'}}>
                  <Icon active name="thumbs-up" />
                  <Text>1.1K</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        
        </Content>
        <View >        
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="logo-twitter" />
            </Button>
          </Fab>
          </View> 
  
        
        <Footer>
          <FooterTab>
            <Button active>
              <Icon active name="home" />
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
            <Button
            onPress={() => {
              Actions.fourth();
            }}>
              <Icon name="alert" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
        )
    }
}