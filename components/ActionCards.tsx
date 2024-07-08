import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCards = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.titleText}>Blog Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card]}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Images In React Native</Text>
          </View>
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
            }}
          />
          <View style={styles.cardBody}>
            <Text numberOfLines={2} style={styles.headingText}>
              React Native provides a unified way of managing images and other
              media assets in your Android and iOS apps. To add a static image
              to your app, place it somewhere in your source code tree and
              reference it like this:
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://reactnative.dev/docs/images')
              }>
              <Text style={styles.socialLink}> Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://www.linkedin.com/in/md-aamir-enam-0752b41a5/',
                )
              }>
              <Text style={styles.socialLink}> Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCards;

const styles = StyleSheet.create({
  cardImage: {
    height: 190,
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
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  headingText: {
    fontSize: 14,
    paddingHorizontal: 8,
    color: 'black',
  },
  container: {
    padding: 8,
    margin: 8,
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  cardBody: {
    paddingVertical: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialLink: {
    color: 'white',
    backgroundColor: 'black',
    padding: 6,
    borderRadius: 6,
    marginBottom: 4,
  },
});
