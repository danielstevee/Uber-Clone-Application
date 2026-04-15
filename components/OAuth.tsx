import { View, Text, TouchableOpacity, Image } from "react-native";

const OAuth = () => (
  <View style={{ marginTop: 20 }}>
    {/* Divider */}
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, height: 1, backgroundColor: "#E5E7EB" }} />

      <Text
        style={{
          marginHorizontal: 10,
          fontSize: 16,
          color: "#6B7280",
        }}
      >
        Or
      </Text>

      <View style={{ flex: 1, height: 1, backgroundColor: "#E5E7EB" }} />
    </View>
    
    <TouchableOpacity
      style={{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        paddingVertical: 14,
        borderRadius: 30,
        backgroundColor: "white",
      }}
    >
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
        }}
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
      <Text style={{ fontSize: 16, fontWeight: "500" }}>
        Continue with Google
      </Text>
    </TouchableOpacity>
  </View>
);

export default OAuth;
