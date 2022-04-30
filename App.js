import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { ItemScreen } from "./screens/ItemScreen";
import { ListingScreen } from "./screens/ListingScreen";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="ListingScreen" component={ListingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderRadius: 12,
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'hotpink',
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: 'white',
    marginTop: 8,
  },
  smallText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.25,
    color: 'grey',
  },
  medText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.25,
    color: 'grey',
  },
  label: {
    color: 'white',
  },
});

export default App;