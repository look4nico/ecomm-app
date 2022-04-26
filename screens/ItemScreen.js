import { StatusBar } from "expo-status-bar";
import { useCallback, useContext } from "react";
import { FlatList, Pressable, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { ExerciseContext, styles } from "../App";

export function ItemScreen() {
  return (
    <View style={styles.container}>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <StatusBar style="auto" />
    </View>
  );
  
}