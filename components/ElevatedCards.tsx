import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  const cards = [];
  for (var i = 0; i <= 15; i++) {
    cards.push(
      <View key={i} style={[styles.card, styles.elevatedCard]}>
        <Text>Tap</Text>
      </View>,
    );
  }
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        {cards}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 4,
  },
  elevatedCard: {
    backgroundColor: 'pink',
  },
});
