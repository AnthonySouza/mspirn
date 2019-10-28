import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, PixelRatio, StatusBar, Menu } from 'react-native'
import { Content, Header, Title, Button, Card, CardItem, Container, Drawer, Body, Left, Right, List, ListItem, Separator, Switch } from 'native-base';
import Touchable from 'react-native-platform-touchable';
import Sidebar from 'react-native-sidebar';
import { Icon } from 'react-native-eva-icons';
import PropTypes from 'prop-types'

import { styles } from './styles/style'
import { MainFormLeftSideBarList } from './components/main_form_left_sidebar_list'
import { APP_DEFAULT_COLOR_1, APP_STATUS_BAR_COLOR_2, APP_TEXT_COLOR_WHITE } from '../settings/app_settings';
import { APP_DEFAULT_COLOR_3 } from '../theme/main_theme';
// import SideBar from './yourPathToSideBar';

import LoginForm from './login_form';
import NewQueryForm from './new_query_form'

/**
* @author Antonio Souza
**/
const { container } = styles
const MainForm = ({ navigation }) => (

    <Container style={container}>
      <View style={styles.mainFormContent}>
        <Header style={styles.topMenu}>
              <StatusBar backgroundColor={APP_DEFAULT_COLOR_3} barStyle="light-content" hasTabs />
              <Left>
                {/* <Touchable style={styles.topMenuSideBarButton} foreground={Touchable.Ripple('#fff')} transplarent>
                  <Icon style={styles.topMenuSideBarButtonIcon} fill={APP_DEFAULT_COLOR_1} name='arrow-forward' width={48} height={48} />
                </Touchable> */}
              </Left>
              <Body>
                <Title style={styles.topMenuAppTitle}>+ Saúde</Title>
              </Body>
            </Header>
        <View style={styles.collumnCard}>

        {/* BOAS VINDAS */}
          
          <View style={styles.wellcomeView}>
          <Card style={styles.cardButton}>
              <View style={styles.cardTitleContent}>
                <Image style={styles.cardIcon} source={require('../resources/images/user.png')} width={48} height={48}></Image>
                
                {/* <Icon style={styles.cardIcon} fill={APP_DEFAULT_COLOR_3} name='plus-circle' width={48} height={48} /> */}
                <Text style={styles.cardTitle}>Bem vindo, Antonio</Text>
              </View>
              <Text style={styles.cardInfo}>Informações Pessoais</Text>
            </Card>
          </View>

          {/* BOTÃO AGENDAMENTO */}
          <Touchable onPress={() => navigation.navigate('NewQuery') } foreground={Touchable.Ripple(styles.cardButton.backgroundColor)} style={styles.touchable}>
            <Card style={styles.cardButton}>
              <View style={styles.cardTitleContent}>
                <Icon style={styles.cardIcon} fill={APP_DEFAULT_COLOR_3} name='plus-circle' width={48} height={48} />
                <Text style={styles.cardTitle}>Agendar</Text>
              </View>
              <Text style={styles.cardInfo}>Faça uma consulta  com  data e hora marcadas.</Text>
            </Card>
          </Touchable>

          {/* BOTÃO CARTEIRA VACINAÇÃO */}
          <Touchable onPress={() => navigation.navigate('Login')} foreground={Touchable.Ripple(styles.cardButton.backgroundColor)} style={styles.touchable}>
            <Card style={styles.cardButton}>
              <View style={styles.cardTitleContent}>
                <Icon style={styles.cardIcon} fill={APP_DEFAULT_COLOR_3} name='shield' width={48} height={48} />
                <Text style={styles.cardTitle}>Vacinação</Text>
              </View>
              <Text style={styles.cardInfo}>Abra  sua  carteira  de vacinação digital</Text>
            </Card>
          </Touchable>

          {/* BOTÃO BUSCAR GPS */}
          <Touchable onPress={() => navigation.navigate('Maps')} foreground={Touchable.Ripple(styles.cardButton.backgroundColor)} style={styles.touchable}>
            <Card style={styles.cardButton}>
              <View style={styles.cardTitleContent}>
                <Icon style={styles.cardIcon} fill={APP_DEFAULT_COLOR_3} name='compass' width={48} height={48} />
                <Text style={styles.cardTitle}>Unidades</Text>
              </View>
              <Text style={styles.cardInfo}>Faça uma busca de GPS por unidades de saúde mais proxima a você.</Text>
            </Card>
          </Touchable>
        </View>
      </View>
    </Container>
);

MainForm.navigationOptions = {
  title: '',
  headerStyle: {
    height: 0
  }
}

export default MainForm