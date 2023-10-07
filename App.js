import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import TicTacToe from "./src/Tic_Tac_Toe/TicTacToe";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TicTacToe />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
