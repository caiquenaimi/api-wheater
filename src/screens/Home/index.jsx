import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title texto="Home 🏠" />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Category")}
      >
        <Text>Category</Text>
      </TouchableOpacity>
    </View>
  );
}
