import React, { useState } from 'react';
import {  Keyboard, Text, View, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert, } from 'react-native';
const COLORS = { primary: '#3E50B9', white: '#fff' };

const InputScreen = ({ navigation }) => {
  const [name, setName] = useState('')

  const onPressHandler = () => {
    if (name.length == 0) {
      Alert.alert("Warning","Please fill in input")
    }
    Keyboard.dismiss();
    console.log(name)
    navigation.navigate({
      name: 'Active',
      params: { name },
      merge: true,

    })
    navigation.navigate({
      name: 'Main',
      params: { name },
      merge: true,
    })
  }
  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView
          style={Style.writeTaskWrapper}
        >
          <View>
            <View style={Style.inputhead}>
              <TextInput
                style={Style.input}
                placeholder='Enter Todos'
                onChangeText={setName}
              />
              <TouchableOpacity activeOpacity={0.5} style={Style.button} onPress={() => onPressHandler()}>
                <Text style={{ color: 'white' }}>Add</Text>
              </TouchableOpacity>
            </View>

          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  )
}
const Style = StyleSheet.create({
  main: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#858482',
    width: "80%",
  },
  button: {
    height: 50,
    width: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.primary

  },
  writeTaskWrapper: {

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputhead: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    elevation: 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    height: 50,
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
  },
})
export default InputScreen