import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View>
    <Text>Search</Text>
    <Button title="hello" onPress={() => navigation.push("Settings")}></Button>
  </View>
);
