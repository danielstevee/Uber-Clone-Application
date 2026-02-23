import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ position: "relative" }}>
        <Image
          source={images.signUpCar}
          style={{ width: "100%", height: 600 }}
          resizeMode="cover"
        />

        <Text
          style={{
            position: "absolute",
            top: 200,
            left: 20,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Create Your Account
        </Text>

        <View style={{ marginTop: -370, padding: 20 }}>
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({ ...form, name: value })
            }
          />
        </View>
        <Text
          style={{
            position: "absolute",
            top: 200,
            left: 20,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Create Your Account
        </Text>

        <View style={{ marginTop: -30, padding: 20 }}>
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({ ...form, name: value })
            }
          />
        </View>
      </View>
      
    </ScrollView>
  );
};

export default SignUp;