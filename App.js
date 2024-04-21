import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PruebaManejoComponent from './src/components/PruebaManejoComponent';
import CatalogueComponent from './src/components/CatalogueComponent';
import CotizacionComponent from './src/components/CotizacionComponent';
import TallerComponent from './src/components/TallerComponent';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Catalogo' component={CatalogueComponent} />
        <Tab.Screen name='Prueba de Manejo' component={PruebaManejoComponent} />
        <Tab.Screen name='Cotizacion de Vehiculo' component={CotizacionComponent} />
        <Tab.Screen name='Servicio de Taller' component={TallerComponent} />
      </Tab.Navigator>
    </NavigationContainer>

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
