import { StyleSheet, View } from "react-native";
const { Text, Image } = require("react-native");
import ClosetBackground from "../assets/closet-background.png";

import MascotRedBow from "../assets/mascot-red-bow.png";
import MascotBlueHat from "../assets/mascot-blue-hat.png";
import MascotOriginal from "../assets/mascot-orig.png";

const CustomizeScreen = ({ navigation, coins }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.absolute}>
        <Text style={styles.header}>Avatar</Text>
        <View style={styles.pill}>
          <Image
            source={require("../assets/sun.png")}
            style={styles.pillImage}
          />
          <Text style={styles.pillText}>{coins} </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 40,
  },
  absolute: {
    position: "absolute",
    top: 65,
    left: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pillImage: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  pill: {
    // backgroundColor: "#dbe4cf",
    backgroundColor: "white",
    borderRadius: 32,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50,
    marginTop: 15,
    width: 80,
    // position: "absolute",
  },
  pillText: {
    // color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomizeScreen;
