import React from "react";
import { View, Animated, StyleSheet, useWindowDimensions } from "react-native";
import { Extrapolate } from "react-native-reanimated";

type slidesDataTypes = {
  id: string;
  title: string;
  description: string;
  image: any;
};

const Parginator = ({ data, scrollX }: any) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", height: 64, gap: 10 }}>
      {data.map((_: slidesDataTypes, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        // console.log("inputRange===>>", inputRange);

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          Extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Parginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 50,
    backgroundColor: "#5b45db",
    marginHorizontal: 8,
  },
});
