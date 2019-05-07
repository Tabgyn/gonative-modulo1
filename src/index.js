import React, { Component } from "react";
import { View, StatusBar, Text, ScrollView } from "react-native";

import Post from "./components/Post";

import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import { styles } from "./styles";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo React Native",
        author: "Tiago Azevedo Borges",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus ex vel viverra scelerisque. Sed ante eros, lacinia id leo sed, gravida dignissim urna. Etiam sed dolor id justo ornare laoreet non non ligula. Mauris iaculis consequat elit, interdum vulputate augue blandit non. In ultrices elit quis lacus viverra viverra."
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        author: "Tiago Azevedo Borges",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus ex vel viverra scelerisque. Sed ante eros, lacinia id leo sed, gravida dignissim urna. Etiam sed dolor id justo ornare laoreet non non ligula. Mauris iaculis consequat elit, interdum vulputate augue blandit non. In ultrices elit quis lacus viverra viverra."
      },
      {
        id: 3,
        title: "Aprendendo React Native",
        author: "Tiago Azevedo Borges",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus ex vel viverra scelerisque. Sed ante eros, lacinia id leo sed, gravida dignissim urna. Etiam sed dolor id justo ornare laoreet non non ligula. Mauris iaculis consequat elit, interdum vulputate augue blandit non. In ultrices elit quis lacus viverra viverra."
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              content={post.content}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
