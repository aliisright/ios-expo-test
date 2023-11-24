import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <View style={{ width: 250, height: 220 }}>
        <DateTimePicker
          mode="date"
          display="compact"
          value={new Date()}
          minimumDate={new Date()}
          onChange={() => {}}
          style={{ flex: 0.8, marginLeft: 'auto', marginRight: 'auto' }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
