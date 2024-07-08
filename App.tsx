import React from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCards from './components/ActionCards';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCards />
          <ContactCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
