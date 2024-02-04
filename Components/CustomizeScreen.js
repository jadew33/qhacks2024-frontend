import { StyleSheet, View } from "react-native";
const { Text, Image, TouchableOpacity } = require("react-native");
import ClosetBackground from "../assets/closet-background.png";

import MascotRedBow from "../assets/mascot-red-bow.png";
import MascotBlueHat from "../assets/mascot-blue-hat.png";
import MascotOriginal from "../assets/mascot-orig.png";

import RedBow from "../assets/clothing/red-bow.png";
import BlueHat from "../assets/clothing/blue-hat.png";
import OrangeSkirt from "../assets/clothing/orange-skirt.png";
import PurpleSkirt from "../assets/clothing/purple-skirt.png";
import BlueTop from "../assets/clothing/blue-top.png";
import GreenTop from "../assets/clothing/green-top.png";

import React, { useState } from "react";

const CustomizeScreen = ({
  navigation,
  coins,
  closet,
  setCoins,
  setAvatar,
  avatar,
  setCloset,
}) => {
  const items = [
    {
      name: "Red Bow",
      image: RedBow,
      value: 100,
    },
    {
      name: "Blue Hat",
      image: BlueHat,
      value: 100,
    },
    {
      name: "Orange Skirt",
      image: OrangeSkirt,
      value: 200,
    },
    {
      name: "Purple Skirt",
      image: PurpleSkirt,
      value: 200,
    },
    {
      name: "Blue Top",
      image: BlueTop,
      value: 200,
    },
    {
      name: "Green Top",
      image: GreenTop,
      value: 200,
    },
  ];
  const avatarImages = {
    "Red Bow": MascotRedBow,
    "Blue Hat": MascotBlueHat,
  };
  const Circle = ({ image, text, value }) => {
    const isBought = closet.includes(text);
    print(closet);
    const displayText = isBought ? "Bought" : value;

    const handlePress = () => {
      if (isBought) {
        const newAvatar = avatarImages[text];
        if (newAvatar) {
          setAvatar(newAvatar);
        }
      }
    };

    return (
      <View style={styles.circleContainer}>
        <TouchableOpacity style={styles.circle} onPress={handlePress}>
          <Image source={image} style={styles.circleImage} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          {!isBought && (
            <Image
              source={require("../assets/sun.png")}
              style={styles.coinImage}
            />
          )}
          <Text>{displayText}</Text>
        </View>
      </View>
    );
  };

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

      <View styles={styles.closetContainer}>
        <Image
          source={require("../assets/closet-background.png")}
          style={styles.closet}
        />
        <Image source={avatar} style={styles.mascot} />
      </View>

      <View style={styles.circles}>
        {items.map((item, index) => (
          <Circle
            key={index}
            image={item.image}
            text={item.name}
            value={item.value}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  },
  pillText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  closetContainer: {
    position: "relative",
  },

  mascot: {
    position: "absolute",
    left: 120,
    top: 20,
  },
  circleContainer: {
    alignItems: "center",
    margin: 10,
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  circleImage: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
  circleText: {
    marginTop: 8,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  circles: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: 350,
    marginTop: 20,
    marginBottom: -140,
  },
  coinImage: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
});

export default CustomizeScreen;
