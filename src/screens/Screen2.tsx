import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { BIKE } from "../data/bike";

const CATEGORIES = ["All", "Roadbike", "Mountain"];

export default function Screen02({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bikesList, setBikesList] = useState(BIKE);

  const filteredBikes =
    selectedCategory === "All"
      ? bikesList
      : bikesList.filter((item) => item.category === selectedCategory);

  // Xử lý bật/tắt yêu thích
  const toggleFavorite = (id) => {
    setBikesList((prev) =>
      prev.map((bike) =>
        bike.id === id ? { ...bike, isFavorite: !bike.isFavorite } : bike,
      ),
    );
  };

  const renderBikeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Screen3", { bike: item })}
    >
      {/* Icon yêu thích */}
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item.id)}
      >
        <FontAwesome
          name={item.isFavorite ? "heart" : "heart-o"}
          size={18}
          color={item.isFavorite ? "#E94141" : "#555"}
        />
      </TouchableOpacity>

      {/* Ảnh xe */}
      <Image
        source={item.image}
        style={styles.cardImage}
        resizeMode="contain"
      />

      {/* Tên & Giá */}
      <Text style={styles.bikeName}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.currencySymbol}>$</Text>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>The world's Best Bike</Text>

      {/* Category Tabs */}
      <View style={styles.categoryContainer}>
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <TouchableOpacity
              key={cat}
              style={[styles.categoryTab, isActive && styles.categoryTabActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryText,
                  isActive && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Product Grid */}
      <FlatList
        data={filteredBikes}
        renderItem={renderBikeItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E94141",
    marginTop: 20,
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryTab: {
    width: "30%",
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryTabActive: {
    borderColor: "#E94141",
  },
  categoryText: {
    fontSize: 14,
    color: "#BEB6B6",
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#E94141",
  },
  listContainer: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    width: "48%",
    backgroundColor: "#FDEEEB",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    position: "relative",
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  cardImage: {
    width: 120,
    height: 110,
    marginVertical: 10,
  },
  bikeName: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  currencySymbol: {
    fontSize: 15,
    color: "#F7BA83",
    marginRight: 2,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
