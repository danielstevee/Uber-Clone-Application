import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

interface InputFieldProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  ...props
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ marginVertical: 8, width: "100%" }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 6 }}>
          {label}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,         
            borderColor: "#A0A0A0",    
            borderRadius: 999,
            paddingHorizontal: 12,
            backgroundColor: "#fff",
          }}
        >
          {icon && (
            <Image
              source={icon}
              style={{ width: 25, height: 25, marginRight: 13 }}
            />
          )}

          <TextInput
            secureTextEntry={secureTextEntry}
            style={{ flex: 1, paddingVertical: 18 }}
            {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;