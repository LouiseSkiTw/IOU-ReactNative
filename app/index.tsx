import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <View className="switch-container">
        <Text className="switch">
          <View className="slider">
            <View className="toggle"></View>
          </View>
        </Text>
      </View>

      <View className="bar">
        <View className="ball"></View>
      </View>
      <View className="triangle"></View>
    </View>
  );
}
