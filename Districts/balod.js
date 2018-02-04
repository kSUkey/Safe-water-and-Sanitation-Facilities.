import React, { Component } from 'react';
import { Alert, Image, StyleSheet, TabBarIOS } from 'react-native';
import { Container, Header, Title, View, Fab, Content, Card, CardItem, Thumbnail, Text, Segment, Button, Icon, Left, Body, Right, Footer, FooterTab } from 'native-base';
import {Actions, Scene} from 'react-native-router-flux';

export default class balod extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Block: BALOD	
                    {'\n'}
                    Panchayat: DEWARBHAT	
                    {'\n'}
                    Parameter Name: Iron
                    {'\n'}
                    BIS Permissible Limit : 1.00
                    {'\n'}
                    ActualLevel	:1.10
                    {'\n'}
                    Habitation Status as on 03/02/2018 : Fully Covered
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    Block: BALOD	
                    {'\n'}
                    Panchayat:</Text><Text style={styles.blue}>JUNGERA</Text>	
                    <Text>
                    Parameter Name: Iron
                    {'\n'}
                    BIS Permissible Limit : 1.00
                    {'\n'}
                    ActualLevel	:1.10
                    {'\n'}
                    Habitation Status as on 03/02/2018 :</Text>
                    <Text style={styles.red}> Quality Affected</Text>
                    <Text>
                    {'\n'}
                    {'\n'}
                    {'\n'}Block: BALOD	
                    {'\n'}
                    Panchayat: DEWARBHAT	
                    {'\n'}
                    Parameter Name: Iron
                    {'\n'}
                    BIS Permissible Limit : 1.00
                    {'\n'}
                    ActualLevel	:1.10
                    {'\n'}
                    Habitation Status as on 03/02/2018 : Fully Covered
                    {'\n'}
                    {'\n'}
                    {'\n'}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blue: {
      color: 'blue',
      fontWeight: 'bold',
    },
    red: {
      color: 'red',
      fontWeight: 'bold',
    },
  });