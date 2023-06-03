import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

import EmployeeList from './src/employees/EmployeeList';
import { createStackNavigator } from 'react-navigation-stack';
import EmployeeDetail from './src/employees/EmployeeDetail';
import { createAppContainer } from 'react-navigation';
import Login from './src/Login';
import EmployeeForm from './src/employees/EmployeeForm';


const AppNavitagor = createStackNavigator(
  {
    List : {screen: EmployeeList},
    Detail : {screen: EmployeeDetail},
    Form : {screen: EmployeeForm},
    Login : {screen: Login}
  },
  {
    initialRouteName: "Login"
  }
)

const App = createAppContainer(AppNavitagor)



export default App
