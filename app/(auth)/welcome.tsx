import { router } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { onboarding } from "../../constants";

const { width } = Dimensions.get("window");

const Onboarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      
      {/* Skip */}
      <View style={{ width: "100%", alignItems: "flex-end", padding: 40 }}>
        <TouchableOpacity onPress={() => router.replace("/(auth)/sign-up")}>
          <Text style={{ fontWeight: "bold" }}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Carousel */}
      <View style={{ flex: 1 }}>
        <Carousel
          width={width}
          height={400}
          data={onboarding}
          scrollAnimationDuration={500}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 24,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {item.title}
              </Text>

              <Text style={{ textAlign: "center", color: "gray" }}>
                {item.description}
              </Text>
            </View>
          )}
        />
      </View>

      {/* Bottom Button */}
      <View style={{ padding: 24 }}>
        <TouchableOpacity
          onPress={() => {
            if (isLastSlide) {
              router.replace("/(auth)/sign-up");
            }
          }}
          style={{
            backgroundColor: "black",
            paddingVertical: 16,
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {isLastSlide ? "Get Started" : "Swipe"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;