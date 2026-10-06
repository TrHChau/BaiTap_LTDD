import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Screen3({ route, navigation }) {
  // Lấy dữ liệu sản phẩm được truyền sang từ Screen02
  const { bike } = route.params || {};

  const [isFavorite, setIsFavorite] = useState(bike?.isFavorite || false);

  if (!bike) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Không tìm thấy thông tin sản phẩm!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Nút Back quay lại Screen 02 */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Khối chứa ảnh lớn */}
        <View style={styles.imageWrapper}>
          <Image
            source={bike.image}
            style={styles.detailImage}
            resizeMode="contain"
          />
        </View>

        {/* Thông tin chi tiết */}
        <View style={styles.detailsContent}>
          {/* Tên xe */}
          <Text style={styles.title}>{bike.name}</Text>

          {/* Dòng giá & Giảm giá */}
          <View style={styles.priceRow}>
            <Text style={styles.discountText}>{bike.discount}</Text>
            <Text style={styles.priceText}>{bike.price}$</Text>
          </View>

          {/* Phần Description */}
          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.descBody}>{bike.description}</Text>
        </View>
      </ScrollView>

      {/* Footer Hành động */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.heartBtn}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <FontAwesome
            name={isFavorite ? "heart" : "heart-o"}
            size={24}
            color={isFavorite ? "#E94141" : "#000"}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 45,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 20,
    padding: 6,
  },
  imageWrapper: {
    backgroundColor: "#FDEEEB",
    height: 350,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  detailImage: {
    width: "100%",
    height: "100%",
  },
  detailsContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  discountText: {
    fontSize: 16,
    color: "#BEB6B6",
    fontWeight: "500",
    marginRight: 35,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  descTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  descBody: {
    fontSize: 14,
    color: "#777",
    lineHeight: 22,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  heartBtn: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  addToCartBtn: {
    flex: 1,
    backgroundColor: "#E94141",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
