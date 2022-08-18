import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

function TagInput({ style = {}, onChange = () => {} }) {
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);

  const handleTextChange = (value) => {
    if (
      value.length > 1 &&
      [",", " "].includes(value.slice(-1)) &&
      !value.match(new RegExp(`^[${[",", " "].join("")}]+$`, "g")) &&
      !tags.indexOf(value.slice(0, -1).trim()) > -1
    ) {
      setTags([...tags, value.slice(0, -1).trim()]);
      setText("");
      onChange(tags);
    } else {
      setText(value);
    }
  };

  return (
    <>
      <TextInput
        style={{ ...styles.input, ...style }}
        value={text}
        onChangeText={(data) => handleTextChange(data)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default TagInput;
