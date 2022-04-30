import { StatusBar } from "expo-status-bar";
import {  useState } from "react";
import { Pressable, View } from "react-native";
import { ButtonGroup, Card, Input, Text } from "react-native-elements";
import { styles } from "../App";



export function ItemScreen({ navigation }) {
  let [itemTitle, setItemTitle] = useState("");
  let [itemPrice, setitemPriced] = useState("");
  let [description, setDescription] = useState("");
  let [city, setCity] = useState("");
  let [email, setEmail] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
    return (
      <View style={styles.container}>
         <Card>
        <Card.Title>New Listing</Card.Title>
        <Input label="Item Title" onChangeText={(value) => {setItemTitle(value)}}></Input>
        <Text style={styles.medText}>Item Condition</Text>
        <ButtonGroup
          buttons={['New', 'Like New', 'Good']}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginBottom: 20 }}
        />
        <Input label="Price" onChangeText={(value) => {setitemPriced(value)}}></Input>
        <Input label="Description" multiline='true' onChangeText={(value) => {setDescription(value)}}></Input>
        <Input label="City" onChangeText={(value) => {setCity(value)}}></Input>
        <Input label="Email" onChangeText={(value) => {setEmail(value)}}></Input>
        {/* if all inputs are checked, then submit */}
          <Pressable style={styles.pressable} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.text}>Post Listing</Text>
          </Pressable>
      </Card>
          <StatusBar style="auto" />
      </View>
    );
    
  }