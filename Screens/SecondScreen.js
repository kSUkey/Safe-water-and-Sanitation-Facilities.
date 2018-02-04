import React, { Component } from 'react';
import { Container, FooterTab, Footer, Button, Icon, Title, Header, Content, List, ListItem, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';


export default class ListExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Districts</Text>
        </Header>
        <Content>
          
          <Button full light
          onPress={() => {
            Actions.balod();
          }}><Text>BALOD</Text></Button>
          
          <Button full light><Text>BALODA BAZAR</Text></Button>
          
          <Button full light><Text>BALRAMPUR</Text></Button>
          
          <Button full light
          onPress={() => {
            Actions.bastar();}}
          ><Text>BASTAR</Text></Button>
          
          <Button full light><Text>BEMETARA</Text></Button>
          
          <Button full light><Text>BIJAPUR</Text></Button>
          <Button full light><Text>BILASPUR</Text></Button>
          <Button full light><Text>DANTEWADA</Text></Button>
          <Button full light><Text>DHAMTARI</Text></Button>
          <Button full light><Text>DURG</Text></Button>
          <Button full light><Text>GARIYABAND</Text></Button>
          <Button full light><Text>JANJGIR-CHAMPA</Text></Button>
          <Button full light><Text>JASHPUR</Text></Button>
          <Button full light><Text>KANKER</Text></Button>
          <Button full light><Text>KAWARDHA</Text></Button>
          <Button full light><Text>KONDAGAON</Text></Button>
          <Button full light><Text>KORBA</Text></Button>
          <Button full light><Text>KORIYA</Text></Button>
          <Button full light><Text>MAHASAMUND</Text></Button>
          <Button full light><Text>MUNGELI</Text></Button>
          <Button full light><Text>NARAYANPUR</Text></Button>
          <Button full light><Text>RAIGARH</Text></Button>
          <Button full light><Text>RAIPUR</Text></Button>
          <Button full light><Text>RAJNANDAGON</Text></Button>
          <Button full light><Text>SUKMA</Text></Button>
          <Button full light><Text>SURAJPUR</Text></Button>
          <Button full light><Text>SURGUJA</Text></Button>
          
          
          
        </Content>

        
        <Footer>
          <FooterTab>
            <Button
            onPress={() => {
              Actions.first();
            }}>
              <Icon name="home" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
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
    );
  }
}
