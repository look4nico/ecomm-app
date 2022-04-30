import { React } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { styles } from "../App";


export default function ItemPost(props) {
  
  const { item } = props;
  return (
    <Card style={styles.container}>
      <View>
        <Card.Title>{item.itemTitle}</Card.Title>
      </View>
      <View style={styles.desc}>
        <Text>Asking Price: ${item.itemPrice}</Text>
        <Text>Item Description: {item.description}</Text>
        <Text>City: {item.city}</Text>
        <Text>Condition: {item.itemCondition}</Text>
        <Text>Email: {item.email}</Text>
      </View>
    </Card>
  );
}