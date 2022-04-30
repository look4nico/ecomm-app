import { StatusBar } from "expo-status-bar";
import { useCallback, useContext } from "react";
import { FlatList, Pressable, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { ExerciseContext, styles } from "../App";

export function ListingScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("ItemScreen")}>
            <Text style={styles.text}>Create new Listing</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate("ListingScreen")}>
            <Text style={styles.text}>Check Listings</Text>
        </Pressable>
        <StatusBar style="auto" />
    </View>
  );
  
}