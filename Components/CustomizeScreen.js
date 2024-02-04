import { StyleSheet, View } from "react-native";
const { Text } = require("react-native");

const CustomizeScreen = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      <Text
        style={{
          paddingTop: 40,
          fontSize: 24,
          fontFamily: "BeVietnamPro_600SemiBold",
        }}
      >
        Customize
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 25,
  },
});

export default CustomizeScreen;
