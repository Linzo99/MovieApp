import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Movies from '../pages/Movies'
import TV from '../pages/TV'
import Favorite from '../pages/Favorite'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const horizontalAnimation = {
    cardStyleInterpolator:({current, layouts})=>{
        return {
            cardStyle:{
                transform:[
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0]
                    }
                    )}
                ]
            }
        }
    }
}

const StackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="accueil"
            headerMode='none'
            screenOptions={horizontalAnimation}
        >
            <Stack.Screen name="detail" component={Detail}/>
            <Stack.Screen name="accueil" component={TabNavigator}/>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={({ route }) => ({
                tabBarIcon:({focused, color, size})=>(
                    <Icon name={route.name} size={size} color={focused ? 'red' : color}/>
                ),
            })}
            tabBarOptions={{
                style:{backgroundColor:'#424242',paddingBottom:3, borderTopWidth:0},
                inactiveTintColor:'white',
                activeTintColor:'red',
            
            }}
        >
            <Tab.Screen name="home" component={Home}/>
            <Tab.Screen name="movie" component={Movies}/>
            <Tab.Screen name="tv" component={TV}/>
            <Tab.Screen name="favorite" component={Favorite}/>
        </Tab.Navigator>
    )
}

export default StackNavigator