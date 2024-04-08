import { View, Text } from 'react-native'
import styles from './styles'

const Title = ({texto}) => {
  return (
    <View >
      <Text style={styles.title}>{texto}</Text>
    </View>
  )
}

export default Title