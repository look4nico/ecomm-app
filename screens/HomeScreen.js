import { StatusBar } from "expo-status-bar";
import {  Pressable, View } from "react-native";
import {  Card, Text } from "react-native-elements";
import { styles } from "../App";


export function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>E-commerce App</Card.Title>
          <Text style={styles.smallText}>Welcome shopper!</Text>
          <Card.Divider></Card.Divider>
          <Pressable style={styles.pressable} onPress={() => navigation.navigate('ItemScreen')}>
              <Text style={styles.text}>Post New Listing</Text>
          </Pressable>
          <Pressable style={styles.pressable} onPress={() => navigation.navigate('ListingScreen')}>
              <Text style={styles.text}>Listings</Text>
          </Pressable>
      </Card>
        <StatusBar style="auto" />
    </View>
  );
  
}