import React from 'react'

import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon'

import { View, 
  Text, 
  Image
} from 'react-native'

import IllustrationImg from '../../assets/illustration.png'

export function SignIn(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas 
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          text='Entrar com Discord' 
          activeOpacity={0.7}
        />
      </View>
    </View>
  )
}
