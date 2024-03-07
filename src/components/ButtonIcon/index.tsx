import React from 'react'

import { styles } from './styles'

import { 
    Image,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from 'react-native'

import DiscordImg from '../../assets/discord.png'

interface ButtonIconProps extends TouchableOpacityProps {
    text: string
}

export function ButtonIcon({ text, ...rest }: ButtonIconProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}></Image>
            </View>

            <Text style={styles.title}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}