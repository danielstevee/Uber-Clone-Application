import { router } from "expo-router";
import { useState } from "react";
import { Pressable } from "react-native";
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
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

      {/* Indicator */}
<View
  style={{
    flexDirection: "row",
    justifyContent: "center", // <-- ini yang bikin center
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  }}
>
  {onboarding.map((_, index) => (
    <View
      key={index}
      style={{
        width: activeIndex === index ? 45 : 15,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor:
          activeIndex === index ? "black" : "#D1D5DB",
      }}
    />
  ))}
</View>

      {/* Carousel */}
      <View style={{ flex: 1 }}>
        <Carousel
          width={width}
          height={500}
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
              <Image
                source={item.image}
                style={{ width: "100%", height: 300, marginTop: 30 }}
                resizeMode="contain"
              />

              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 20,
                  marginBottom: 12,
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  textAlign: "center",
                  color: "gray",
                  fontSize: 16,
                }}
              >
                {item.description}
              </Text>
            </View>
          )}
        />
      </View>

      {/* Bottom Button */}
    
      <View style={{ paddingHorizontal: 24, marginBottom: 40 }}>
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
              fontSize: 16,
            }}
          >
            {"Get Started" }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;