import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//SCREENS
import HomeScreen from "../screens/HomeScreen";
import StarwarsScreen from "../screens/StarwarsScreen";
//ICONS
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

/**
 * Juan
 * @returns component to stack the screens, if i want to replace initial route i could do it trough this component
 * witouth try to fo to the tab screen and modify the initialRoute (personal preference)
 */


function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarActiveBackgroundColor: 'yellow',
          tabBarInactiveTintColor: 'yellow',
          tabBarInactiveBackgroundColor: 'black', 
          headerStyle: {
            backgroundColor: '#13161c', 
          },
          headerTintColor: 'yellow',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Star Wars Browser"
        component={StarwarsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="space-shuttle" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
