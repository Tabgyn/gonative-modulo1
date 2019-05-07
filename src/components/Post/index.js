import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

const Post = props => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.postTitle}>{props.title}</Text>
      <Text style={styles.postAuthor}>{props.author}</Text>
    </View>
    <Text style={styles.postContent}>{props.content}</Text>
  </View>
);

export default Post;
