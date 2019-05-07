import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
  },

  postAuthor: {
    color: '#999',
  },
  postContent: {
    color: '#555',
  },
  postHeader: {
    flex: 1,
    flexDirection: 'column',

    borderStyle: 'solid',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
  postTitle: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});
