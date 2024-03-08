import { styles } from './styles'
import { View } from 'react-native'
import { Profile } from '../../components/Profile'

export function Home(): JSX.Element {
    return (
        <View>
            <View style={styles.header}>
                <Profile />
            </View>
        </View>
    )
}