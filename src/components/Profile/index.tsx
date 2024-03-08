import { styles } from './styles'
import { Avatar } from '../Avatar'
import { Text, View } from 'react-native'

export function Profile(): JSX.Element {
    return (
        <View style={styles.container}>
            <Avatar urlImage='https://github.com/Joaorocha07.png' />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá
                    </Text>
                    <Text style={styles.username}>
                        João Victor
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}