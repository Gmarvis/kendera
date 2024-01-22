import { useState, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
} from "react-native";
import slides from "../slides";
import OnboardingItem from "./OnboardingItem";
import Parginator from "./Parginator";

const Onboarding = ({ navigation }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
    // console.log("currentIndex 56:===>>>", viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleSkip = () => {
    navigation.navigate("signup");
  };

  return (
    <View style={styles.container}>
      {currentIndex === slides.length - 1 ? (
        <Pressable style={styles.NextBtn} onPress={handleSkip}>
          <Text style={styles.BtnText}>NEXT</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.NextBtn} onPress={handleSkip}>
          <Text style={styles.BtnText}>SKIP</Text>
        </Pressable>
      )}

      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          // ref={slidesRef}
        />
      </View>
      <Parginator data={slides} scrollX={scrollX} />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#2C0C54",
    // backgroundColor: "#2C0C54",
  },
  NextBtn: {
    marginTop: 30,
    alignSelf: "flex-end",
    paddingRight: 20,
  },
  BtnText: {
    fontWeight: "bold",
    color: "#5b45db",
  },
});

/*=======>TODO<=======|
MAKE THE ONBOARDING AUTHOMATICALY WHEN THE SLIDES END

*/
