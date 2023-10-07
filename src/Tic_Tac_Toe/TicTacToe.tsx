/* eslint-disable react-native/no-inline-styles */
import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
  threeByThreeMarker,
  fourByFourMarker,
  InitialMarkerInterface,
  getUserWinningPossibilities,
  winningChances3_3,
  winningChances4_4,
  refreshImage,
  getRandomNumberBetween,
} from "./Constants";
import WinnerModal from "./WinnerModal";

const TicTacToe = () => {
  const [markers, setMarkers] =
    useState<InitialMarkerInterface[]>(threeByThreeMarker);
  const [toggle, setToggle] = useState<boolean>(false);
  const [winner, setWinner] = useState<null | string>(null);
  const [winnerModalVisible, setWinnerModalVisible] = useState<boolean>(false);
  const [playWithJS, setPlayWithJS] = useState<boolean>(false);

  const winningPossibilities =
    markers.length === 9 ? winningChances3_3 : winningChances4_4;

  const markersAccordingToLength =
    markers.length === 9 ? threeByThreeMarker : fourByFourMarker;

  const handleWinnerToggleModal = () => {
    setWinnerModalVisible(!winnerModalVisible);
  };

  const onPressRefresh = () => {
    setMarkers(markersAccordingToLength);
  };

  const handlePlayWithJS = () => {
    setPlayWithJS(true);
    setMarkers(markersAccordingToLength);
  };

  const handleFourByFourPress = () => {
    setMarkers(fourByFourMarker);
    setPlayWithJS(false);
  };

  const handleThreeByThreePress = () => {
    setMarkers(threeByThreeMarker);
    setPlayWithJS(false);
  };

  const markerVal = toggle ? "O" : "X";

  const markValueFiller = (item: InitialMarkerInterface) => {
    const copyArr = markers.map((obj) => {
      if (obj.id === item.id) {
        return { ...obj, markValue: markerVal, unEditable: true };
      } else {
        return {
          ...obj,
        };
      }
    });
    return copyArr;
  };

  const randomValueFiller = (filledArr: InitialMarkerInterface[]) => {
    const filteredItemWONull = filledArr.filter((a) => {
      if (a.markValue === null) {
        return a;
      }
    });
    const randomIndex = getRandomNumberBetween(
      0,
      filteredItemWONull.length - 1
    );
    const randomItem = filteredItemWONull[randomIndex];
    if (randomItem === undefined) {
      return filledArr;
    }
    const finalArr = filledArr.map((obj) => {
      if (obj.id === randomItem.id) {
        return { ...obj, markValue: "O", unEditable: true };
      } else {
        return {
          ...obj,
        };
      }
    });
    return finalArr;
  };

  const onPressBox = (item: InitialMarkerInterface) => {
    if (!playWithJS && !item.unEditable) {
      const markedValueArr = markValueFiller(item);
      if (!item.unEditable) {
        setToggle(!toggle);
        setMarkers(markedValueArr);
        checkWinner(markedValueArr);
      }
    } else {
      if (!item.unEditable) {
        setToggle(false);
        const markedValueArr = markValueFiller(item);
        const markedRandomArr = randomValueFiller(markedValueArr);
        setMarkers(markedRandomArr);
        checkWinner(markedRandomArr);
      }
    }
  };

  const checkWinner = (item: InitialMarkerInterface[]) => {
    const checkDraw = item.every((draw) => {
      return draw.unEditable === true;
    });
    const XWinningArr = getUserWinningPossibilities(item, "X");
    const YWinningArr = getUserWinningPossibilities(item, "O");

    if (!checkDraw) {
      for (let i = 0; i < winningPossibilities.length; i++) {
        const [a, b, c] = winningPossibilities[i];
        if (
          ((XWinningArr[a] === 1 && XWinningArr[b]) === 1 && XWinningArr[c]) ===
          1
        ) {
          setWinner("X");
          setWinnerModalVisible(true);
          setMarkers(markersAccordingToLength);
          setTimeout(() => {
            setWinnerModalVisible(false);
          }, 700);
        } else if (
          ((YWinningArr[a] === 1 && YWinningArr[b]) === 1 && YWinningArr[c]) ===
          1
        ) {
          setWinner("O");
          setWinnerModalVisible(true);
          setMarkers(markersAccordingToLength);
          setTimeout(() => {
            setWinnerModalVisible(false);
          }, 700);
        }
      }
    } else {
      setWinner("Draw");
      setWinnerModalVisible(true);
      setMarkers(markersAccordingToLength);
      setTimeout(() => {
        setWinnerModalVisible(false);
      }, 700);
    }
  };

  return (
    <>
      <View style={styles.headerView}>
        <View
          style={
            markerVal === "X"
              ? styles.playerXBorder
              : styles.playerOBorderWOLine
          }
        >
          <Text style={{ color: markerVal === "X" ? "#007ff4" : "black" }}>
            Player X's turn
          </Text>
        </View>
        <View
          style={
            markerVal === "O"
              ? styles.playerOBorder
              : styles.playerOBorderWOLine
          }
        >
          <Text style={{ color: markerVal === "O" ? "#f40075" : "black" }}>
            Player O's turn
          </Text>
        </View>
      </View>
      <View style={styles.sideBySide}>
        <View>
          <TouchableOpacity
            style={styles.playWithJSBtn}
            onPress={handlePlayWithJS}
          >
            <Text style={styles.fourByFourTxt}>Play With Robot</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnView}
            onPress={handleThreeByThreePress}
          >
            <Text style={styles.fourByFourTxt}>Play 3 X 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnView}
            onPress={handleFourByFourPress}
          >
            <Text style={styles.fourByFourTxt}>Play 4 X 4</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainView}>
        <View style={styles.parentView}>
          {markers.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.individualCell,
                  { width: markers.length === 9 ? 100 : 90 },
                  { height: markers.length === 9 ? 100 : 90 },
                ]}
                onPress={() => onPressBox(item)}
              >
                <Text
                  style={[
                    styles.markerValue,
                    { color: item.markValue === "X" ? "#007ff4" : "#f40075" },
                  ]}
                >
                  {item.markValue}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity style={styles.refreshButton} onPress={onPressRefresh}>
          <Image
            source={{
              uri: refreshImage,
            }}
            style={styles.refreshImage}
          />
        </TouchableOpacity>
        <WinnerModal
          winner={winner}
          modalVisible={winnerModalVisible}
          toggleModal={handleWinnerToggleModal}
        />
      </View>
    </>
  );
};

export default TicTacToe;
