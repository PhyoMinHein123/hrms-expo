import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

function Header(props){

  const [name, setName] = useState('aung aung')

  return (
    <View>
      <Text> {props.message} </Text>
      <Text onPress={props.popup}> Our {props.name} </Text>
      <TextInput style={{backgroundColor: 'orange', height: 50}} onChangeText={(n)=>{setName(n)}} placeholder='enter your name'/>
      <Button onPress={()=>{alert('You Typed '+ name)}} title='Click'/>
    </View>
  )
}

export {Header}