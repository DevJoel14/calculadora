
import {
  StatusBar,
  View,
} from 'react-native';
import { CalculadoraCreen } from './presentation/screens/CalculadoraCreen';
import { styles } from './config/theme/style'

function App() {


  return (
    <View style={styles.backgroud}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculadoraCreen />
    </View>
  );
}


export default App;
