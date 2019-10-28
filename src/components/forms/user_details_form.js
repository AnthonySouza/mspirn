import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';
import { Content, Form, Item, Label, Input, Header, Title, Button, Card, CardItem, Container, Drawer, Body, Left, Right, List, ListItem, Separator, Switch } from 'native-base';
import { styles } from './styles/style';
import { Icon } from 'react-native-eva-icons';

const userData = [
  {
    Id: 0,
    NomeCompleto: "Antonio Gabriel Daniel de Souza",
    Cpf: "12276058897",
    Cns: "914646506890004",
    Idade: 19,
    Rg: "285850763",
    Filiacao: {
      NomePai: "Jeremy Silva Braga",
      NomeMae: "Lillie Nogueira Xavier"
    },
    Genero: 0,
    DataNascimento: "2000-06-16",
    Local: {
      Latitude: -22.2035278,
      Longitude: -47.3816271,
      Cidade: "Leme",
      Bairro: "Jardim Res. Quaglia",
      Uf: "SP",
      Rua: "R. Octavio Mauricio Pommer",
      Cep: "13617-751",
      Numero: 262
    },
    TipoSanguineo: "AB+",
    Telefones: {
      NumeroTelefone: "(35) 9869-3488",
      NumeroCelular: "(47) 94425-1069"
    },
    Altura: 1.72,
    Peso: 57,
    Observacao: "Laudantium dolor illo unde eveniet ipsam. Quas eos mollitia et dicta. Deleniti nisi odit exercitationem vel fuga rerum totam reprehenderit temporibus. Neque asperiores error sed et excepturi ut. Quidem atque omnis labore omnis non vel sed. Sint maxime ullam reprehenderit eligendi itaque inventore ut eligendi accusamus.\n\nQuia doloremque architecto reprehenderit omnis eum et placeat aut. Ut commodi quis ducimus blanditiis cumque odit. Consequatur repellat quam tempore omnis facilis quos. Rem inventore molestias. Numquam facilis qui temporibus enim.\n\nNulla alias perspiciatis et qui nesciunt quia in. Odit et atque ex neque eos quas quas molestiae et. Molestiae ut odio repudiandae pariatur et. Eum nihil quidem et eos alias asperiores.\n\nQui sunt delectus excepturi tempora dolore iste. Tempora sunt voluptatem. Architecto eos modi. Distinctio ut ad rerum natus.\n\nNon dolorum earum. Ullam est odit deleniti commodi ut officia soluta. Praesentium eos aliquam sit ut iusto. Ad sunt iusto nemo error velit dolores voluptatum. Porro ipsam doloribus.\n\nPossimus saepe quis. Aliquam in sed explicabo temporibus sed corrupti. Vel ut cupiditate porro explicabo animi.\n\nDolor sed amet harum consequuntur necessitatibus rem harum ducimus facilis. Mollitia dolores vel nihil et delectus et. Aperiam similique sit."
  }
]

class UserForm extends React.Component {
  render() {

    var user = userData.map(function(item) {
      return {
        key: item.Id,
        label: item.NomeCompleto
      };
    });
    

    return (

        <View style={styles.udfContent}>
        <View style={styles.udfNameContend}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input value={user[0].label}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </View>
      </View>
    );
  }
}

const UserDetailsForm = ({ navigation }) => (
  <UserForm></UserForm>
);

UserDetailsForm.navigationOptions = {
  title: 'Informações Pessoais'
}

export default UserDetailsForm