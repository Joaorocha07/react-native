import React, { ReactNode } from 'react'

import { styles } from './style'
import { theme } from '../../global/styles/theme'
import { LinearGradient } from 'expo-linear-gradient'

interface BackgroundProps {
    children: ReactNode
}

export function Background({ children }: BackgroundProps) {
    const { secondary80, secondary100 } = theme.colors
    return (
        <LinearGradient 
            style={styles.container} 
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    )
}