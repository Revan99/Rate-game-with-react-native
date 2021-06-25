import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'
// import Home from '../pages/Home'
// import About from '../pages/About'

const RootDrawerNavigator = createDrawerNavigator({
    Home: HomeStack,
    About: AboutStack
},
    // {
    //     drawerBackgroundColor: {
    //         backgroundColor: 'red'
    //     }
    // }
);

export default createAppContainer(RootDrawerNavigator)