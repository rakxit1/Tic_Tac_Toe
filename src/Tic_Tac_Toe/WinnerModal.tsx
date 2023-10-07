/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';

interface WinnerModalInterface {
  winner: null | string;
  modalVisible: boolean;
  toggleModal: () => void;
}

const WinnerModal: FC<WinnerModalInterface> = ({
  winner,
  modalVisible,
  toggleModal,
}) => {
  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.centeredView}>
          {winner !== 'Draw' ? (
            <View
              style={[
                styles.modalView,
                {
                  backgroundColor:
                    winner === 'X'
                      ? 'rgba(0, 127, 244, 0.1)'
                      : 'rgba(244, 0, 117, 0.1)',
                },
              ]}>
              <Text style={styles.winnerText}>
                Winner is
                <Text
                  style={{
                    color: winner === 'X' ? '#007ff4' : '#f40075',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  {'  '}
                  {winner}
                </Text>
              </Text>
            </View>
          ) : (
            <View
              style={[
                styles.modalView,
                {
                  backgroundColor: 'rgb(20,189,172)',
                },
              ]}>
              <Text style={styles.winnerText}>X O {winner}</Text>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  winnerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default WinnerModal;
