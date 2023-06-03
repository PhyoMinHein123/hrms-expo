import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native'; 
import { Employee } from '../endpoint';

class EmployeeForm extends Component {

    state = { 
        editedEmployee: null
    }

    inputChanged = (name, value) => {
        console.log('input change', name, value);
        employee = this.props.navigation.getParam('employee', ''); 
        employee[name] = value;
        this.setState({ editedEmployee: employee });
    }

    save = () => { 
        console.log('save click');
        fetch(Employee, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d99e9a801884729c110c03a667b1b206ccb20b2d' 
            },
            body: JSON.stringify(this.state.editedEmployee) 
        })
        .then( resp => resp.json())
        .then( res => this.props.navigation.navigate('Detail', {
                employee: this.state.editedEmployee })
            )
        .catch( error => console.log(error))
    }

    update = () => { 
        console.log('update click');
        employee = this.props.navigation.getParam('employee', ''); 
        fetch(`${Employee}${employee.id}/`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d99e9a801884729c110c03a667b1b206ccb20b2d' 
            },
            body: JSON.stringify( this.state.editedEmployee)
        })
        .then( resp => resp.json())
        .then( res => this.props.navigation.navigate('Detail', {employee: this.state.editedEmployee }))
        .catch( error => console.log(error))
    }

    render() { 
        employee = this.props.navigation.getParam('employee', ''); 
        view_type = this.props.navigation.getParam('view_type', '');
        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
                        Employee Form 
                    </Text> 
                </View>
                <TextInput
                    style={styles.inputText}
                    value={employee.name}
                    placeholder='Username'
                    onChangeText={value => this.inputChanged('name', value)} 
                />
                <TextInput
                    style={styles.inputText}
                    value={employee.phone}
                    placeholder='Phone Number'
                    onChangeText={value => this.inputChanged('phone', value)} 
                />
                <TextInput
                    style={styles.inputText}
                    value={employee.address}
                    placeholder='Address'
                    onChangeText={value => this.inputChanged('address', value)} 
                />
                <View style={{ width: '80%'}}>
                {
                    view_type ? <Button onPress={this.save} title="Save" /> :
                    <Button onPress={this.update} title="Update" /> 
                }
                </View>
            </View> 
        );
    } 
}

EmployeeForm.navigationOptions = { 
    title: "Form Screen", 
    headerStyle: {
        backgroundColor: 'green' 
    },
    headerTintColor: '#fff', }

const styles = StyleSheet.create({ 
    container: {
        flex: 1, 
        backgroundColor: "#fff", 
        alignItems: "center",
    },
    inputText: {
        height: 50, 
        padding: 10, 
        height: 45, 
        width: "80%",
        borderRadius: 10, 
        marginBottom: 20, 
        borderColor: 'blue', 
        borderWidth: 1
    },
});
export default EmployeeForm;