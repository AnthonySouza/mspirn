import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image, Dimensions, PixelRatio, StatusBar, Menu } from 'react-native'
import { Content, Form, Item, Label, Input, DatePicker, Header, Title, Button, Card, CardItem, Container, Drawer, Body, Left, Right, List, ListItem, Separator, Switch } from 'native-base';
import Touchable from 'react-native-platform-touchable';
import { Icon } from 'react-native-eva-icons';

import PropTypes from 'prop-types';

import { styles } from './styles/style';


/**
* @author Antonio Souza
* @class Date
**/
class DatePickerApp extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <View style={styles.nqfDatePickerContend}>
        <DatePicker
          style={styles.nqfDatePicker}
          defaultDate={new Date(2018, 4, 4)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2018, 12, 31)}
          locale={"pt-br"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"calendar"}
          placeHolderText="Clique e selecione o dia da consulta"
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          onDateChange={this.setDate}
          disabled={false}
        />
      </View>
    );
  }
}

const { container } = styles
const NewQueryForm = ({ navigation }) => (
  <Container style={container}>
    <Content style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
      <View style={styles.nqfContend}>

        <TextInput style={styles.nqfTextInput}
          multiline
          editable
          scrollEnabled
          maxLength={500}
          placeholder='Digite aqui o máximo de detalhes sobre a consulta'
          placeholderTextColor='#606060'
          font
        />
        <Button onPress={() =>  {(
         <DatePickerApp></DatePickerApp>
        )}}  style={styles.nqfProcceedButton}>
          <Icon style={styles.nqfProcceedButtonIcon} fill={'#45bf9d'} name='plus-circle' height='88' width='88' />
        </Button>

      </View>




      {/* <Form style={{backgroundColor: '#fbfb', height: 100}}>
            <Item>
              <Label picker>Data prevista</Label>
              <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"calendar"}
            placeHolderText="Clique e selecione o dia da consulta"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            // onDateChange={this.setDate}
            disabled={false}
            />
            </Item>
            <Item floatingLabel last>
              <Label>Detalhes da consulta</Label>
              <Input style={styles.nqf_desc} />
            </Item>
          </Form> */}
    </Content>
  </Container>

);

NewQueryForm.navigationOptions = {
  title: 'Nova Consulta'
}

export default NewQueryForm