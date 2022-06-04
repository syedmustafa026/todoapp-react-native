import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
const COLORS = { primary: '#3E50B9', white: '#fff' };
const TodoText = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  // const Checked = () =>{
  // if (toggleCheckBox === true){
  //   setToggleCheckBox
  // }
  // }
  return (
    <View style={Style.Textbox}>
      <View style={Style.todotext}>
        <CheckBox
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          tintColor={setToggleCheckBox?COLORS.primary: null}
        />
        <Text Style={Style.text}>{props.value}</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Icon onPress={props.press} name='delete' size={30} color={COLORS.primary} />
      </View>
    </View>
  )
}


const Style = StyleSheet.create({
  Textbox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#d4d3cf',
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,

  },
  todotext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold'
  }
})
export default TodoText