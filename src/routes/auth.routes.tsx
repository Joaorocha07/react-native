import React from 'react'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/Signin'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
          }}
        >
            <Screen 
                name='SignIn'
                component={SignIn}
            />
            <Screen 
                name='Home'
                component={Home}
            />
        </Navigator>
    )
}