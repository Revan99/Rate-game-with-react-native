import { createStackNavigator as csn } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../pages/Home";
import ReviewDetails from "../pages/ReviewDetails";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "GameZone",
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Detail",
        }
    }
}

const HomeStack = csn(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: '#ddd', height: 60 }
    }
})
// export default createAppContainer(HomeStack)

export default HomeStack