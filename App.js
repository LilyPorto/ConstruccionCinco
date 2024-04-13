import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FormComponent from './src/components/FormComponent';
import CatalogueComponent from './src/components/CatalogueComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <FormComponent />
      <CatalogueComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
