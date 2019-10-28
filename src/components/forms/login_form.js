import React, { Component } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import { View, Text, Navigator, AppRegistry, StyleSheet, Event, TextInput, TouchableOpacity, Animated, Keyboard, KeyboardAvoidingView, Dimensions, Alert, Button, StatusBar, Image, PixelRatio, Platform } from 'react-native'
import { Toast } from "native-base";
import PropTypes from 'prop-types'
import { CheckBox } from 'react-native-elements'
import Touchable from 'react-native-platform-touchable';

import {
  APP_DEFAULT_COLOR_1,
  APP_DEFAULT_COLOR_2,
  APP_DEFAULT_COLOR_3,
  APP_DEFAULT_COLOR_4,
  APP_STATUS_BAR_COLOR_2,
  APP_TEXT_COLOR_WHITE
} from '../theme/main_theme';

import {
  APP_REQUEST_LOGIN_SERVER,
  APP_VALIDATOR_ACCESS
} from '../settings/app_settings'

import { styles } from './styles/style'

export var cpf = '', cns = '';

/**
* @author Antonio Souza
**/
const LoginForm = ({ navigation }) => (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.select({
      ios: 'padding',
      android: '',
    })}
    enabled={false}
  >
    <StatusBar backgroundColor={APP_DEFAULT_COLOR_3} barStyle="light-content" />
    <View style={styles.loginInitViewContainer}>
        <Text style={styles.loginInitTopAppTitleText}><Text style={styles.mais}>+</Text> Saúde</Text>
        <Text style={styles.loginInitTopAppSubTitleText}>Para começar, entre com seu CPF e seu número do S.U.S</Text>
      </View>

    <View style={styles.inputContent}>
      <TextInputMask
        style={styles.inputText}
        // ref={(input) => this.cpf = input}
        autoCapitalize="none"
        autoCorrect={false}


        keyboardType='decimal-pad'
        returnKeyType="next"
        placeholder='Digite seu CPF'
        placeholderTextColor='#c7c7c7'
        type={'cpf'}
        // value={this.state.cpf}
        maxLength={14}
      // onChangeText={text => {
      //   this.setState({
      //     cpf: text
      //   })
      // }}
      />

      <TextInputMask
        style={styles.inputText}
        // ref={(ref) => this.cns = ref}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType='decimal-pad'
        returnKeyType="go"
        placeholder='Digite o número SUS'
        placeholderTextColor='#c7c7c7'
        type={'custom'}
        options={{
          mask: '999.9999.9999.9999'
        }}
        // 
        maxLength={18}
      // value={this.state.cns}
      />
      <Touchable onPress={() => this.procceedLogin()} style={styles.buttonNext} foreground={Touchable.Ripple('#3399FF')}>
        <Text style={styles.buttonNextText}>Continuar</Text>
      </Touchable>

      <Touchable style={styles.buttonLoginError} foreground={Touchable.Ripple('#3399FF')}>
        <Text style={styles.buttonLoginErrorText}>Não consigo me conectar</Text>
      </Touchable>

      {/* <TouchableOpacity style={styles.bottomButtons} >
            <Text style={styles.bottomButtonsText}>Termos de uso</Text>
            <Text style={styles.bottomButtonsText}>Produto Inovador</Text>
            <Text style={styles.bottomButtonsText}>Versão: 1.0b</Text>
          </TouchableOpacity> */}
    </View>
  </KeyboardAvoidingView>
)

LoginForm.navigationOptions = {
  title: '',
  headerStyle: {
    height: 0
  }
}

export default LoginForm;