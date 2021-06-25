
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'
import About from './pages/About'
import ReviewDetails from './pages/ReviewDetails'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './components/Header';
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})
// const AuthStack = createStackNavigator()
// const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const AboutStack = createStackNavigator()
const Drawer = createDrawerNavigator()

// const TabsScreen = () =>
//   <Tabs.Navigator tabBarOptions={{
//     labelStyle: {
//       fontSize: 20,
//       flex: 1,
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       borderWidth: 2
//     }
//   }} >
//     <Tabs.Screen name="Home" component={HomeStackScreen} />
//     <Tabs.Screen name="About" component={AboutStackScreen} />
//   </Tabs.Navigator>
const HomeStackScreen = () =>
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home} options={({ navigation }) => ({
      header: () => <Header navigation={navigation} title='GameZone' />
    })} />
    <HomeStack.Screen name='ReviewDetails' component={ReviewDetails} options={({ route }) => {
      return { title: route.params.title }
    }} />
  </HomeStack.Navigator>



const AboutStackScreen = () =>
  <AboutStack.Navigator>
    <AboutStack.Screen name='About' component={About} options={({ navigation }) => ({
      header: () => <Header navigation={navigation} title='About GameZone' />
    })} />
  </AboutStack.Navigator>


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator >
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="About" component={AboutStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
