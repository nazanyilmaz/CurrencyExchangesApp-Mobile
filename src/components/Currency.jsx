import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button, Input} from '@ui-kitten/components';
import {
  MultipleSelectList,
  SelectList,
} from 'react-native-dropdown-select-list';
import axios from 'axios';

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
let API_KEY = 'fca_live_NruwC2NUVEateF5u3F3Toug8y2TN2X1bLkVfGJmC';

// create a component
const Currency = () => {
  const data = [
    {key: '1', value: 'USD'},
    {key: '2', value: 'TRY'},
    {key: '3', value: 'EUR'},
  ];
  const [selected, setSelected] = React.useState('');
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCureency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);
  const exchange = async () => {
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCureency);
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`,
    );
    const result = (response.data.data[toCureency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <SafeAreaView
      style={{backgroundColor: 'black', marginVertical: 190, gap: 30}}>
      <Text
        style={{
          color: 'white',
          fontSize: 26,
          fontFamily: 'arial',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Currency Exchange App
      </Text>
      <View
        style={{
          borderColor: 'gray',
          shadowColor: 'gray',
          shadowRadius: 50,
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 2,
          flexDirection: 'row',
          gap: 6,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 180,
        }}>
        <Input
          value={amount}
          onChangeText={value => setAmount(value)}
          style={{width: 100}}
        />

        <SelectList
          onSelect={() => console.log('select')}
          save="value"
          placeholder={'USD'}
          data={data}
          setSelected={val => setFromCurrency(val)}
          boxStyles={{backgroundColor: 'white', fontSize: 10}}
          dropdownStyles={{backgroundColor: 'white'}}
          maxHeight={110}
        />
        <SelectList
          onSelect={() => console.log('select')}
          save="value"
          placeholder={'TRY'}
          data={data}
          setSelected={val => setToCurrency(val)}
          boxStyles={{backgroundColor: 'white'}}
          dropdownStyles={{backgroundColor: 'white'}}
          maxHeight={110}
        />
        <Input value={result} style={{width: 100}} />
      </View>

      <Button
        onPress={exchange}
        style={{
          borderColor: 'gray',
          borderRadius: 200,
          backgroundColor: 'black',
          shadowColor: 'gray',
          shadowRadius: 50,
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 2,
        }}
        appearance="ghost"
        status="control">
        Change
      </Button>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Currency;
