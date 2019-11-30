import React, { Component } from 'react'
import { Text, View ,SafeAreaView} from 'react-native';
import Home from './src/Components/Homes/home';
import Login from './src/Components/Login/login';
import CreateAccout from './src/Components/createAccout/createAccout';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements'


const HomeStack=createStackNavigator(
  {
  
  Home:{
    screen:Home,
  }
})
const CreateStack=createStackNavigator({
  create:{
    screen:CreateAccout
  }
})
const LoginStack=createStackNavigator({
  Login:{
    screen:Login
  }
})
const AppNavigation=createDrawerNavigator({
  ទំព័រដើម:{
    screen:HomeStack,
    path:'home'
  },
  ចុះឈ្មោះ:{
    screen:CreateStack,
    path:'createAcount'
  },
  ចូលប្រព័ន្ធ:{
    screen:LoginStack,
    path:'login'
  },
  
},
{
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  // contentComponent: SlideMenu,
  navigationOptions: {
    drawerLockMode: 'locked-closed',
  },
},
)
const AppContainer=createAppContainer(AppNavigation);

export class App extends Component {
  render() {
    return (
      <AppContainer/>
      
    )
  }
}

export default App
