import React from 'react'
import { AuthRoutes } from './auth.routes'
import { NavigationContainer } from '@react-navigation/native'
import { Background } from '../components/Background'

export function Routes() {
    return (
        <Background>
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
        </Background>
    )
}