import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
// import * as Linking from "expo-linking";

const linking = {
  prefixes: [],
  enabled: true,
  screens: {
    initialRouteName: 'Home',
    Home: '',
    Privacy: 'privacy',
  },
};

const RootStack = createNativeStackNavigator();

export default function App() {
  const header = () => <Text>Header</Text>;

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={() => <Text>Hello</Text>} />
        <RootStack.Screen name="Privacy" component={() => <Text>But</Text>} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
