import { Dimensions } from "react-native";
// 화면이 넓이와 크기를 얻어올 수 있음
const { width, height } = Dimensions.get("screen");

export default {
  width,
  height,
};
