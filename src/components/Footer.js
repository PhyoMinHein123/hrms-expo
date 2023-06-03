import { Text, View, Alert, TextInput, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'


export class Footer extends Component {

    state = {
        name: 'Aung Aung'
    }

    logConsole(){
        Alert.alert('You Typed in Footer!')
    }

    showName = () => {
        Alert.alert("You typed " + this.state.name);
    }

  render() {
    return (
      <View>
        <Text> {this.props.address} </Text>
        <TextInput style={styles.input} onChangeText={this.logConsole}/>
        <TextInput style={{ backgroundColor: 'orange'}} onChangeText={(n)=>{this.setState({name:n})}}/>
        <Button onPress={this.showName} title="Click"/>
      </View>
    )
  }
}

export default Footer

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#932332'
    }
})