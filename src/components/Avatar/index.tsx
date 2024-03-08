import { styles } from './styles'
import { Image } from 'react-native'
import { theme } from '../../global/styles/theme'
import { LinearGradient } from 'expo-linear-gradient'

interface AvatarProps {
    urlImage: string
}

export function Avatar({ urlImage }: AvatarProps): JSX.Element {
    const { secondary50, secondary70 } = theme.colors
    return (
        <LinearGradient 
            style={styles.container} 
            colors={[secondary50, secondary70]}
        >
            <Image 
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}