import React, { Component } from 'react';
import { Alert, Image, StyleSheet } from 'react-native';
import { Container, Header, style, Title, View, Fab, Content, Card, CardItem, Thumbnail, Text, Segment, Button, Icon, Left, Body, Right, Footer, FooterTab } from 'native-base';
import {Actions, Scene} from 'react-native-router-flux';

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;




export default class CardImageExample extends Component {
        _onPressButton() {
          Alert.alert('You liked it.')
        }

  
  
  render() {
    return (
      <Container>          
        
        <Content Padder>
             

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAQ2AAAAJDkwNzFlYjIwLTA5YjktNGI2MC05YjFjLWIyNzFhOWU5NzgxYQ.jpg'}} />
                <Body>
                  <Text>Dr. Anil Singh</Text>
                  <Text note>MBBS</Text>
                  <Button info rounded
                  onPress={() => {
                    Alert.alert('Works in Govt. Hospital. Having 10 years of Experience.');
                  }}><Text>Info</Text></Button>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://image.freepik.com/free-vector/doctor-clinic-illustration_1270-69.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>5 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>0 Comments</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAflAAAAJDhjNTBiZjdiLWIzZjgtNDFjMi1hMTIyLTc5NjM3YzBlNzUzNQ.jpg'}} />
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Software Engineer</Text>
                  <Button info rounded
                  onPress={() => {
                    Alert.alert('Works in Security Inc. Having 10 years of Experience.');
                  }}><Text>Info</Text></Button>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.collegequest.com/wp-content/uploads/how-to-become-a-software-engineer.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>1 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>0 Comments</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://socialism.in/wp-content/uploads/2013/09/Modi-PM.jpg'}} />
                <Body>
                  <Text>Karan Mheta</Text>
                  <Text note>Politician</Text>
                  <Button info rounded
                  onPress={() => {
                    Alert.alert('Belongs to BJP. Joinned in 2011.');
                  }}><Text>Info</Text></Button>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX9784212.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="thumbs-up" />
                  <Text>1 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>0 Comments</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>

        </Content>


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
            <Button active>
              <Icon active name="people" />
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