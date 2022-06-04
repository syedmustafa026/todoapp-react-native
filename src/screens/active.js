import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import TodoText from '../components/textbox';
import Icon from 'react-native-vector-icons/MaterialIcons'
const COLORS = { primary: '#3E50B9', white: '#fff' };

export function Active({ navigation, route }) {
  const [activetodos, setActiveTodos] = useState([])
  const deletion = (index) => {
    var dlt = (activetodos);
    dlt.splice(index, 1)
    setActiveTodos([...dlt])
  }
  useEffect(() => {
    if (route.params) {
      console.log(route.params)
      setActiveTodos([...activetodos, route.params?.name])
    }
  }, [route.params?.name]);

  return (
    <>
      <ScrollView>
        <View style={Style.main}>
          {
            activetodos.map((item, index) => {
              return (
                <View>
                  <TodoText press={() => deletion(index)} key={index} value={item} />
                </View>)
            })}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Inputs')}>
        <View style={Style.iconContainer}>
          <Text style={{ fontSize: 36, color: 'white' }}>+</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
const Style = StyleSheet.create({
  main: {
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    width: "80%",
  },
  Button: {

    borderRadius: 100,
    backgroundColor: 'black'

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
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
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


  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
