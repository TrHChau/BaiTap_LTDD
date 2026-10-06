import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        A premium online store for {"\n"} sporter and their stylish choice
      </Text>
      <View style={styles.imageContain}>
        <Image
          source={require("../../assets/images/Xanh.png")}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>POWER BIKE {"\n"} SHOP</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.textButton}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 30,
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "VT323",
    lineHeight: 22,
    fontWeight: "bold",
  },
  imageContain: {
    backgroundColor: "#f1cdcd",
    width: "95%",
    height: 320,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "90%",
    height: "90%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#E94141",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 20,
  },
  textButton: {
    fontSize: 27,
    fontFamily: "VT323",
    fontWeight: "400",
    color: "#fff",
  },
});
export default Screen1;
