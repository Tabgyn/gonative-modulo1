import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10
  },

  postHeader: {
    flex: 1,
    flexDirection: "column",

    borderStyle: "solid",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 20
  },
  postTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3
  },
  postAuthor: {
    color: "#999"
  },
  postContent: {
    color: "#555"
  }
});
