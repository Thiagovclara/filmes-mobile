import React from "react";
import { StyleSheet, View } from "react-native";
import Avaliados from "./components/avaliados";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MelhoresAvaliados from './screens/MelhoresAvaliados';
import GestaoUsuario from './screens/GestaoUsuario';

const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
  export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MelhoresAvaliados">
        <Stack.Screen name="MelhoresAvaliados" component={MelhoresAvaliados} />
        <Stack.Screen name="GestaoUsuario" component={GestaoUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A6C6E",
  },
});
