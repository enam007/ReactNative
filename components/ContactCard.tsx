import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ContactCard = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView scrollEnabled={true} style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View style={styles.userCard} key={uid}>
            <Image style={styles.userImage} source={{uri: imageUrl}} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  userImage: {width: 60, height: 60, borderRadius: 60 / 2},
  container: {
    padding: 8,
    margin: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#E9FF97',
    borderRadius: 6,
    padding: 4,
  },
  userName: {
    marginHorizontal: 8,
    padding: 2,
    color: '#131842',
  },
  userStatus: {
    marginHorizontal: 8,
    padding: 2,
    color: '#604CC3',
    fontStyle: 'italic',
  },
});
