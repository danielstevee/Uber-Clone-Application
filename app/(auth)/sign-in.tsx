import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {
    console.log(form);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ position: "relative" }}>
        {/* Background */}
        <Image
          source={images.signUpCar}
          style={{ width: "100%", height: 600 }}
          resizeMode="cover"
        />

        {/* Title */}
        <Text
          style={{
            position: "absolute",
            top: 200,
            left: 20,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Welcome Back 👋
        </Text>

        {/* Form */}
        <View style={{ marginTop: -360, padding: 20 }}>
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          {/* Button */}
          <View style={{ marginTop: 25 }}>
            <TouchableOpacity
              onPress={onSignInPress}
              style={{
                backgroundColor: "#1E90FF",
                paddingVertical: 16,
                borderRadius: 30,
                shadowColor: "#1E90FF",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          {/* OAuth */}
          <OAuth />

          {/* Redirect to Sign Up */}
          <Link href="/(auth)/sign-up">
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                marginTop: 0,
              }}
            >
              <Text style={{ fontSize: 16, color: "#666", marginTop: 15 }}>
                Don’t have an account?
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  color: "#1E90FF",
                  fontWeight: "bold",
                  marginLeft: 4,
                  marginTop: 15,
                }}
              >
                Sign Up
              </Text>
            </View>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
