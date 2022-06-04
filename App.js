import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Goto from './src/screens/main'
import { Active } from './src/screens/active';
import { Deleted } from './src/screens/deleted';
import Icon from 'react-native-vector-icons/MaterialIcons'
const COLORS = { primary: '#3E50B9', white: '#fff' };
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator screenOptions=
      // {({route})=>
      // ({tabBarIcon:()=>{
      //   let iconName;
      //    if(route.name === "Completed"){
      //     iconName = "check-circle"
      //   }
      //   else if (route.name === 'All TODOS'){
      //     iconName = "check-square";
      //   }
      //   else if(route.name === "Active"){
      //     iconName = "CropFreeOutlined"
      //   }
      //   return(
      //     <Icon name={iconName} size ={15} color={COLORS.primary}/>
      //   )
      // }})}
      { 
        {
        headerStyle: {
          backgroundColor: '#3E50B9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
      >
        <Tab.Screen name="All TODOS" component={Goto} />
        <Tab.Screen name="Active" component={Active} />
        <Tab.Screen name="Completed" component={Deleted} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

