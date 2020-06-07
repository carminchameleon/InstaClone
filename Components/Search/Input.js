import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styled from "styled-components";

export default () => {
  const [value, onChangeText] = useState("");
  const onChange = () => {};
  const onSubmit = () => {};
  return (
    <Container>
      <TextInputBox
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        placeholder="Search"
        returnKeyType={"search"}
        autoCorrect="false"
      ></TextInputBox>
      <HorizontalSlider></HorizontalSlider>
    </Container>
  );
};

const TextInputBox = styled.TextInput`
  border: 1px solid black;
  background-color: blue;
`;
const Container = styled.View``;

const HorizontalSlider = styled.View``;
