//import liraries
import React from 'react';
import Currency from './src/components/Currency';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {View} from 'react-native';

// create a component
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={{backgroundColor: 'black'}}>
        <Currency />
      </View>
    </ApplicationProvider>
  );
};

//make this component available to the app
export default App;
