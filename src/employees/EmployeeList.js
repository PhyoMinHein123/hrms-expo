import React, { Component } from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { Employee } from '../endpoint';

class EmployeeList extends Component { 

    state = {
        employees: [],
        isRefreshing: false
    }    

    onRefresh = () => {
        this.setState({ isRefreshing: true}); 
        this.componentDidMount(); 
        this.setState({ isRefreshing: false});
    }

    employeeClicked = employee => { 
        this.props.navigation.navigate('Detail', { employee: employee });
    }

    addNewClicked = () => { 
        console.log("Add New Click"); 
        let newemployee = { 'name': '', 'phone': '', 'address': ''};
        this.props.navigation.navigate('Form', { employee: newemployee, view_type: true }); 
    }

    componentDidMount() {
        console.log('componentDidMount call'); 
        fetch(`${Employee}`, {
            method: 'GET', 
            headers: {
                'Authorization': 'Token d99e9a801884729c110c03a667b1b206ccb20b2d' }
            })
        .then( resp => resp.json())
        .then( res => this.setState({employees: res})) 
        .catch( error => console.log(error))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}> 
                        Employee List
                    </Text> 
                </View>
                <FlatList 
                    data={this.state.employees} 
                    onRefresh={this.onRefresh}
                    refreshing={this.state.isRefreshing}
                    renderItem={({item, index}) => (
                        <Text onPress={() => this.employeeClicked(item)} style={[
                            { padding: 10, fontSize: 18, height: 44, backgroundColor:'white', flex: 1 },
                            index % 2 == 0 ? { backgroundColor: '#D3D3D3' } : { backgroundColor: 'white' } ]}>
                            {item.name} 
                        </Text>
                    )} 
                />
                <FloatingAction onPressMain={this.addNewClicked}/>
            </View> 
        );
    } 
}

EmployeeList.navigationOptions = { 
    title: "Home Screen", 
    headerStyle: {
        backgroundColor: '#714B67' 
    },
    headerTintColor: '#fff', 
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1, 
    },
    item: { 
        padding: 10, 
        fontSize: 18, 
        height: 44
    },
})
export default EmployeeList;

// {
//     "navigation": 
//         {
//             "actions": 
//                 {
//                     "dismiss": [Function dismiss], 
//                     "goBack": [Function goBack], 
//                     "navigate": [Function navigate], 
//                     "pop": [Function pop], 
//                     "popToTop": [Function popToTop], 
//                     "push": [Function push], 
//                     "replace": [Function replace], 
//                     "reset": [Function reset], 
//                     "setParams": [Function setParams]
//                 }, 
//             "addListener": [Function addListener], 
//             "dangerouslyGetParent": [Function anonymous], 
//             "dismiss": [Function anonymous], 
//             "dispatch": [Function anonymous], 
//             "emit": [Function emit], 
//             "getChildNavigation": [Function getChildNavigation], 
//             "getParam": [Function anonymous], 
//             "getScreenProps": [Function anonymous], 
//             "goBack": [Function anonymous], 
//             "isFirstRouteInParent": [Function isFirstRouteInParent], 
//             "isFocused": [Function isFocused], 
//             "navigate": [Function anonymous], 
//             "pop": [Function anonymous], 
//             "popToTop": [Function anonymous], 
//             "push": [Function anonymous], 
//             "replace": [Function anonymous], 
//             "reset": [Function anonymous], 
//             "router": undefined, 
//             "setParams": [Function anonymous], 
//             "state": {"key": "id-1684050638217-0", "routeName": "List"}
//         }, 
//     "screenProps": undefined
// }