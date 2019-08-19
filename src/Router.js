//导航配置页
import { createStackNavigator } from "react-navigation"; 
import MainScreen from "./Main"

export const AppNavigator = createStackNavigator(
    { 
        Main: { screen: MainScreen },
    },
    {
        initialRouteName: "Main"
    }
); 