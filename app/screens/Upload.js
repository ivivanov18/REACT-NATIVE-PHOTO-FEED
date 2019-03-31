import React, { Component } from "react";
import { View, Text } from "react-native";

class Upload extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Upload</Text>
      </View>
    );
  }
}

export default Upload;
