import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff5050',

    flex: 1,
  },

  header: {
    alignItems: 'center',
    backgroundColor: '#fff',

    height: 80,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight(),
  },

  headerTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
