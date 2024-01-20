import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

// type Item = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// };

export default function OnboardingItem({ item }: any) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.contatiner, { width }]}>
      <Image
        source={item.image}
        style={[styles?.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    // color: "white",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  description: {
    fontWeight: "500",
    color: "#62656b",
    // color: "#dddd",

    textAlign: "center",
    paddingHorizontal: 20,
  },
});
