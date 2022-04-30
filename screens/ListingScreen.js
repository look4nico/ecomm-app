import { Pressable, View } from "react-native";
import { Text } from "react-native-elements";
import RecentListings from "../components/listings";
import { styles } from "../App";


let salePosts = [{
  id:0,
  itemTitle: "Vintage Hat",
  itemPrice: 34.00,
  description: "A nice decorative holiday piece.",
  city: "winterpark",
  itemCondition: "Good",
  email:"sd93@mail.com",
  },
  {id:1,
  itemTitle: "Toaster",
  itemPrice: 54.00,
  description: "For the bread lovers in the world.",
  city: "orlando",
  itemCondition: "New",
  email:"wer334@mail.com",
  },
  {id:2,
  itemTitle: "Wool scarf",
  itemPrice: 20.00,
  description: "Who doesn't love a comfy scarf.",
  city: "longwood",
  itemCondition: "Like New",
  email:"sd93@mail.com",
  },
  {id:3,
  itemTitle: "White Airforce 1s",
  itemPrice: 85.00,
  description: "A classic fashion statement.",
  city: "orlando",
  itemCondition: "New",
  email:"hgf46@mail.com",
  },
  {id:4,
  itemTitle: "Glow in the dark sleeping mask",
  itemPrice: 15.00,
  description: "The title says it all.",
  city: "orlando",
  itemCondition: "Good",
  email:"pt0045@mail.com",
  },
]

export function ListingScreen({ route, navigation }) {
  
  return (
  <View style = {styles.container}>
    <RecentListings  salePosts ={salePosts}></RecentListings>
    <View style={styles.navigator}>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Return Home</Text>
      </Pressable>
    </View>
  </View>
  );
}
