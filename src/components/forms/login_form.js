import React, { Component } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Button, StatusBar, Image } from 'react-native'
import PropTypes from 'prop-types'



/**
* @author Antonio Souza
* @class Login Form
**/
class LoginForm extends Component {
  state = {}

  render() {
    const { container } = styles
    return (
      <View style={container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={styles.loginInitViewContainer}>
            <Text style={styles.loginInitTopAppNameText}>+ Saúde</Text>
          </View>
          <View style={styles.loginContainer}>
            <View style={styles.inputs}>
              <View style={styles.input}>
                <TextInputMask style={styles.inputText}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType='decimal-pad'
                  returnKeyType="next"
                  placeholder='Digite seu CPF'
                  placeholderTextColor='#c7c7c7'
                  type={'cpf'}
                  value={this.state.cpf}
                  onChangeText={text => {
                    this.setState({
                      cpf: text
                    })
                  }}

                  ref={(ref) => this.cpfField = ref}
                  //onSubmitEditing={() => verifyCpf()}
                />
              </View>
              <View style={styles.input}>
                <TextInput style={styles.inputText}
                  ref={(input) => this.cpfInput = input}
                  autoCorrect={false}
                  keyboardType='decimal-pad'
                  returnKeyType="go"
                  placeholder='Digite o número SUS'
                  placeholderTextColor='#c7c7c7' />
              </View>
              <TouchableOpacity style={styles.buttonNext} >
                <Text style={styles.buttonNextText}>Continuar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonLoginError} >
                <Text style={styles.buttonLoginErrorText}>Não consigo me conectar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomPanel}>

            </View>
          </View>
        </KeyboardAvoidingView>
      </View>

    )

    // function verifyCpf() {
    //   const cpfIsValid = this.cpfField.isValid()
    //   if(cpfIsValid){
    //     this.cpfInput.focus()
    //   } else {
    //     this.cpfInput.style={};
    //   }
    // }

  }
}


const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#fff',
  },
  loginInitViewContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginTop: 50
  },
  loginInitTopAppNameText: {
    fontFamily: 'Manjari Regular',
    fontSize: 50,
    color: '#8000FF'
  },
  loginContainer: {
    backgroundColor: '#fff',
    height: '100%',
  },
  input: {
    padding: 25,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  inputText: {
    fontSize: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomColor: '#8000FF',
    width: '100%',
    textAlign: 'center'
  },
  buttonNext: {
    backgroundColor: '#8000FF',
    paddingVertical: 15,
    margin: 25,
    borderRadius: 20
  },
  buttonNextText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30
  },
  buttonLoginErrorText: {
    color: '#8000FF',
    textAlign: 'center',
    fontWeight: '700'
  },
  bottomPanel: {
    backgroundColor: '#fff',
    flex: 1
  }
})

export default LoginForm;