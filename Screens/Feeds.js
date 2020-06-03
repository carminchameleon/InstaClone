import React from "react";
import { View, Text, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BLACK_COLOR, GRAY_COLOR, BORDER_COLOR } from "../constants/Colors";
import FeedTopNav from "../Components/FeedTopNav";

export default ({ navigation }) => {
  return (
    <View>
      <FeedTopNav />
    </View>
  );
};
