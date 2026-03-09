import { View, Text } from "react-native";

const OAuth = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
    }}
  >
    <View
      style={{
        flex: 1,
        height: 1,
        backgroundColor: "#E5E7EB",
      }}
    />

    <Text
      style={{
        marginHorizontal: 10,
        fontSize: 16,
        color: "#6B7280",
      }}
    >
      Or
    </Text>

    <View
      style={{
        flex: 1,
        height: 1,
        backgroundColor: "#E5E7EB",
      }}
    />
  </View>
);

export default OAuth;