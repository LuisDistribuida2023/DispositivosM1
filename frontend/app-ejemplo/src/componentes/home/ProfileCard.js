import React from "react";
import { View, Text, StyleSheet, Image, Linking, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SocialIcon = ({ name, url }) => (
  <TouchableWithoutFeedback onPress={() => Linking.openURL(url)}>
    <Icon name={name} size={30} color={'black'} style={styles.icon} />
  </TouchableWithoutFeedback>
);

const ProfileCard = () => {
  const user = {
    avatar: "https://wallpapercave.com/wpt/wp7823331.png",
    coverPhoto: "https://wallpapercave.com/uwp/uwp3786066.jpeg",
    name: "Luis Briones"
  };

  const socialIcons = [
    { name: 'github', url: 'https://github.com/' },
    { name: 'bandcamp', url: 'https://bandcamp.com/' },
    { name: 'linkedin', url: 'https://linkedin.com/' },
    { name: 'dribbble', url: 'https://dribbble.com/' },
  ];

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} name={icon.name} url={icon.url} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: 'white'
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '60%',
    justifyContent: 'space-between'
  },
  icon: {
    color: 'blue',
  },
});

export default ProfileCard;
