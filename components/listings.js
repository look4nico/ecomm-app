
import { React } from "react";
import {  Text, View, FlatList } from "react-native";
import ItemPost from "./ItemPost";
import { styles } from "../App";

export default function RecentListings(props) {
  let { salePosts } = props;
  return (
    <View>
      <Text style={styles.title}>RECENT SALES POSTS</Text>
      <FlatList
        data={salePosts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
          return <ItemPost item={item}></ItemPost>;
        }}
      ></FlatList>
    </View>
  );
}
