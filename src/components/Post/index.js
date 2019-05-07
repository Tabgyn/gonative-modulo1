import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Post = ({ post }) => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postAuthor}>{post.author}</Text>
    </View>
    <Text style={styles.postContent}>{post.content}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
