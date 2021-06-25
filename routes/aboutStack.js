import { createStackNavigator as csn } from "react-navigation-stack";
//import { NavigationContainer } from '@react-navigation/native'
//import { createStackNavigator } from '@react-navigation/stack'

import About from "../pages/About";


const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: "GameZone",
        }
    },
}

const AboutStack = csn(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: '#ddd', height: 60 }
    }
})

//export default createAppContainer(AboutStack)

export default AboutStack