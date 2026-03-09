import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity  } from "react-native";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";


const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {
    console.log(form);
  };

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

        <View style={{ marginTop: -360, padding: 20 }}>
          
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({ ...form, name: value })
            }
          />

          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({ ...form, email: value })
            }
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry
            value={form.password}
            onChangeText={(value) =>
              setForm({ ...form, password: value })
            }
          />

<View style={{ marginTop: 60 }}>
  <TouchableOpacity
    onPress={onSignUpPress}
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
      Sign Up
    </Text>
  </TouchableOpacity>
</View>

<OAuth />

<Link href="/(auth)/sign-in">
  <View
    style={{
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      marginTop: 0,
    }}
  >
    <Text style={{ fontSize: 16, color: "#666", marginTop: 20,}}>
      Already have an account?
    </Text>

    <Text
      style={{
        fontSize: 16,
        color: "#1E90FF",
        fontWeight: "bold",
        marginLeft: 4,
        marginTop: 20,
      }}
    >
      Log In
    </Text>
  </View>
</Link>

        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;