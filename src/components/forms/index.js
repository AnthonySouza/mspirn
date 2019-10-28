// if(__DEV__) {
  import('../../../ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LoginForm from './login_form';
import MainForm from './main_form';
import NewQueryForm from './new_query_form';
import MapForm from './map_form';
import UserDetailsForm from './user_details_form';

const Routes = createAppContainer(
  createStackNavigator({
    Home: MainForm,
    Login: LoginForm,
    NewQuery: NewQueryForm,
    Maps: MapForm
  })

  // createStackNavigator({
  //   Home: MapForm,
  //   Login: LoginForm,
  //   NewQuery: MainForm,
  //   Maps: NewQueryForm
  // })
);

export default Routes;