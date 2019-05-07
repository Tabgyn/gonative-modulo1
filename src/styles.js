import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ff5050"
  },

  header: {
    justifyContent: "center",
    alignItems: "center",

    paddingTop: getStatusBarHeight(),
    height: 80,
    backgroundColor: "#fff"
  },

  headerTitle: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold"
  }
});
