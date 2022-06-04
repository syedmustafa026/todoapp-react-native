import React, { useEffect, useState } from 'react';
import {  Text, View, StyleSheet, TextInput,  TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const COLORS = { primary: '#3E50B9', white: '#fff' };
import TodoText from '../components/textbox';
import InputScreen from './input';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function Main({ navigation, route }) {
  const [todos, setTodos] = useState([])
  const deletion = (index) => {
    var dlt = (todos);
    dlt.splice(index, 1)
    setTodos([...dlt])
    
  }
  useEffect(() => {
    if (route.params != null) {
      setTodos([...todos, route.params?.name])
    }
    
  }, [route.params?.name]);

  return (
    <>
      <ScrollView>
        <View style={Style.main}>
          {
            todos.map((item, index) => {
              return (
                <View>
                  <TodoText press={() => deletion(index)} key={index} value={item} />
                </View>)
            })
          }
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


const Goto = () => {
  return (

    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Inputs" component={InputScreen} />
    </Stack.Navigator>

  )
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

export default Goto

