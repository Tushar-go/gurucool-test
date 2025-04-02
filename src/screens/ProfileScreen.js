import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../components/Icon';

export default function ProfileScreen() {
  const data = [
    'My Name is Tushar Dhalwal',
    'Im born and bought up in Ajmer',
    'I did my BCA from Aryabhatta College ajmer, (2023)',
    'Currently learning Nodejs & React Native to build full stack apps ',
    'Actively seeking full-time roles & internships in React Native development',
  ];
  return (
    <View style={styles.container}>
      <View style={styles.bgimgContainer}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: 'https://images.pexels.com/photos/6788327/pexels-photo-6788327.jpeg',
          }}
        />
        <View style={styles.profileImgContainer}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/110401845?v=4',
            }}
            style={styles.profileImg}
          />
        </View>
      </View>

      <View style={styles.profileInfoContainer}>
        <View>
          <Text style={styles.profileName}>Tushar Dhalwal</Text>
        </View>
        <View>
          <Text>Frontend Developer from India 🇮🇳</Text>
        </View>
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/Tushar-go')}>
            <Icon
              iconFamily={'MaterialCommunityIcons'}
              name="github"
              size={34}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/tushar-dhalwal07/')
            }>
            <Icon
              iconFamily={'MaterialCommunityIcons'}
              name="linkedin"
              size={34}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:dhalwaltushar@gmail.com')}>
            <Icon
              iconFamily={'MaterialCommunityIcons'}
              name="at"
              size={34}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.bioText}>Bio</Text>
        </View>
        <View>
          <Text style={styles.bioContent}>
            My name is Tushar Dhalwal, born and raised in Ajmer, Rajasthan. I
            graduated with a BCA degree from Aryabhatta College, Ajmer in 2023.
            Currently, I'm enhancing my skills in Node.js and React Native to
            build full-stack applications. I'm actively seeking full-time roles
            and internship opportunities in React Native development where I can
            contribute my skills and grow.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgimgContainer: {
    position: 'relative',
    zIndex: 0,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  profileImgContainer: {
    position: 'absolute',
    bottom: -120,
    left: 120,
    zIndex: 5,
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  profileImg: {
    width: '40%',
    height: '82%',
    resizeMode: 'cover',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 6,
  },
  profileInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    gap: 2,
    marginBottom: 20, 
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  listItem: {
    padding: 6,
  },
  bioContainer: {
    marginTop: 6,
    marginBottom:10
  },
  bioText: {
    fontSize: 25,
    fontWeight: '500',
  },
  bioContent: {
    textAlign: 'center',
    lineHeight: 25,
    marginRight: 5,
    marginLeft: 5,
  },
});
