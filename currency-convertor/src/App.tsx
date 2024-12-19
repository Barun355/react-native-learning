import { StyleSheet, Text, View, FlatList, Pressable, TextInput, StatusBar } from 'react-native';
import { currencyByRupee } from './constant';
import CurrencyButton from './components/CurrencyButton';
import { useState } from 'react';
import React from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [currentCurrency, setCurrentCurrency] = useState('')

  const findAmount = (targetValue: Currency) => {
    if (!inputValue) {
      
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setCurrentCurrency(targetValue.name)
    } else {}
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          {resultValue && (
            <Text style={styles.resultText}>{resultValue} 🤑</Text>
          )}
          <View style={styles.inputContainer}>
            <Text style={styles.ruppeeSymbol}>₹</Text>
            <TextInput
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType='numeric'
              placeholder='Enter the amount in rupee.'
              style={styles.inputValue}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[styles.currencyButtonContainer, item.name === currentCurrency && styles.selectedButtonContainer]}
                onPress={() => findAmount(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    // gap: 10,
    flex: 1
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  bottomContainer: {
    flex: 3
  },
  resultText: {
    fontSize: 24,
    fontWeight: '700'
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    borderColor: "#EAF0F1",
    borderRadius: 4,
    paddingHorizontal: 10

  },
  inputValue: {
    width: 220,
    height: 40
  },
  ruppeeSymbol: {
    fontSize: 16
  },
  currencyButtonContainer: {
    backgroundColor: "#EAF0F1",
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 4,
    width: 100,
    margin: 4
  },
  selectedButtonContainer: {
    backgroundColor: '#fff',
    borderColor: "#EAF0F1",
    borderWidth: 1
  }
});