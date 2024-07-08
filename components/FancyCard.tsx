import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://images.pexels.com/photos/26614294/pexels-photo-26614294/free-photo-of-swans-on-the-frozen-lake.png',
            }}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Lake Side View</Text>
            <Text style={styles.cardLabel}>Chandrapura, Jharkhand</Text>
            <Text style={styles.cardDesc}>
              A "lake side view" showcases serene waters meeting the shore,
              framed by lush greenery. It's a perfect spot for relaxation and
              enjoying nature's beauty.
            </Text>
            <Text style={styles.cardLabel}>12 mins Away</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
    margin: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },

  cardImage: {
    height: 180,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black',
  },
  cardDesc: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 8,
  },
  cardLabel: {
    color: 'black',
    fontSize: 14,
    marginBottom: 4,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
});
