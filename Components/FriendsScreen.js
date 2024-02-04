const {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  FlatList,
} = require("react-native");
import SearchIcon from "../assets/search.png";
import CrossIcon from "../assets/cross.png";

const FriendsScreen = ({ navigation }) => {
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (query) => {
  //   setSearchQuery(query);

  // };
  const friends = [
    { name: "Jade Wei", image: require("../assets/cat.jpg") },
    { name: "Annika Tran", image: require("../assets/cat2.jpg") },
  ];

  const renderFriend = ({ item }) => (
    <View style={styles.friendContainer}>
      <Image source={item.image} style={styles.friendImage} />
      <Text style={styles.friend}>{item.name}</Text>
    </View>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={[styles.container]}>
      <Text
        style={{
          paddingTop: 40,
          fontSize: 24,
          fontWeight: "bold",
          // fontFamily: "BeVietnamPro_600SemiBold",
        }}
      >
        Friends
      </Text>
      <View style={styles.search}>
        <Image source={SearchIcon} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Add friends by email..."
          // value={searchQuery}
          // onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={friends}
        renderItem={renderFriend}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={renderSeparator}
        style={styles.list}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 25,
  },
  search: {
    flexDirection: "row",
    height: 50,
    paddingHorizontal: 10,
    marginTop: 30,
    borderRadius: 10,
    alignItems: "center",

    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,

    marginBottom: 30,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    // marginBottom: 20,
  },
  friendContainer: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
  },
  friendImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  friend: {
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  padding: 25,
});
export default FriendsScreen;
