import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
  },
  individualCell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  parentView: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  headerView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    shadowColor: "gray",
    backgroundColor: "white",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },

    alignSelf: "center",
    alignItems: "center",
  },
  playerXBorder: {
    borderBottomWidth: 2,
    padding: 10,
    borderBottomColor: "#007ff4",
  },
  playerOBorder: {
    borderBottomWidth: 2,
    padding: 10,
    borderBottomColor: "#f40075",
  },
  playerOBorderWOLine: {
    padding: 10,
  },
  markerValue: {
    fontSize: 80,
  },
  refreshButton: {
    alignSelf: "flex-end",
    top: 50,
    right: 50,
  },
  refreshImage: {
    height: 50,
    width: 50,
  },
  btnView: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginRight: 50,
  },
  playWithJSBtn: {
    marginTop: 40,
    marginRight: 50,
  },
  fourByFourTxt: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
    color: "gray",
  },
  sideBySide: { flexDirection: "row" },
});
