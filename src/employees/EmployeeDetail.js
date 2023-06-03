import { Component } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native'; 
import { Employee } from '../endpoint';

class EmployeeDetail extends Component {

  deleteClicked = () => { 
    console.log('delete click');
    employee = this.props.navigation.getParam('employee', ''); 
    fetch(`${Employee}${employee.id}/`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token d99e9a801884729c110c03a667b1b206ccb20b2d' }
    })
    .then( res => this.props.navigation.navigate('List')) 
    .catch( error => console.log(error))
  }

  render() { 
    employee = this.props.navigation.getParam('employee', '');
    return (
      <View style={styles.container}>
        <View style={{ marginBottom:20, height: 100, alignItems:"center",justifyContent: "center"}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}> 
            Employee Detail 
          </Text>
        </View>
        <View style={{ marginLeft:20, alignItems: 'flex-start' }}> 
          <Text> Name: { employee.name } </Text>
          <Text> Phone: { employee.phone } </Text>
          <Text> Address: { employee.address } </Text>
        </View>
        <View style={{ marginTop:50, alignItems:"center"}}>
          <View style={{ width: '80%'}}> 
            <Button title="Update"
              onPress={() => this.props.navigation.navigate('Form', {employee: employee, view_type: false })}
            />
          <Text />
          <Button title="Delete" onPress={this.deleteClicked} /> 
          <Text />
          <Button title="Go Home" onPress={() => this.props.navigation.navigate('List')} /> 
          </View>
        </View>
      </View> 
    );
  }
}

EmployeeDetail.navigationOptions = { 
  title: "Detail Screen", 
  headerStyle: {
    backgroundColor: 'orange' 
  },
  headerTintColor: '#fff' 
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  }
});
export default EmployeeDetail;