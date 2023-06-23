import React from 'react';
import { View, Image,  TouchableHighlight, StyleSheet } from 'react-native';
import  { useState } from 'react';

const Footer = () => {

    const [activeIcon, setActiveIcon] = useState('home'); // Initialize the active icon state
      
    const handleIconPress = (iconName) => {
      setActiveIcon(iconName); // Update the active icon state
    };



  return (
    <View style={styles.footerContainer}>
        <TouchableHighlight
          underlayColor="transparent" // Remove underlay color to prevent additional opacity changes
          style={styles.footerIconContainer}
          onPress={() => handleIconPress('home')} // Update the active icon state on press
        >
          <Image
            source={require('./assets/Home.png')}
            style={[
              styles.footerIcon,
              activeIcon === 'home' && styles.activeIcon, // Apply different styles for active icon
            ]}
            resizeMode="contain"
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent" // Remove underlay color to prevent additional opacity changes
          style={styles.footerIconContainer}
          onPress={() => handleIconPress('showcase')} // Update the active icon state on press
        >
          <Image
            source={require('./assets/showcase.png')}
            style={[
              styles.footerIcon,
              activeIcon === 'showcase' && styles.activeIcon, // Apply different styles for active icon
            ]}
            resizeMode="contain"
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent" // Remove underlay color to prevent additional opacity changes
          style={styles.footerIconContainer}
          onPress={() => handleIconPress('marketplace')} // Update the active icon state on press
        >
          <Image
            source={require('./assets/marketplace.png')}
            style={[
              styles.footerIcon,
              activeIcon === 'marketplace' && styles.activeIcon, // Apply different styles for active icon
            ]}
            resizeMode="contain"
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent" // Remove underlay color to prevent additional opacity changes
          style={styles.footerIconContainer}
          onPress={() => handleIconPress('services')} // Update the active icon state on press
        >
          <Image
            source={require('./assets/services.png')}
            style={[
              styles.footerIcon,
              activeIcon === 'services' && styles.activeIcon, // Apply different styles for active icon
            ]}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>

  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#fff',
  },
  footerIconContainer: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  footerIcon: {
    width: 25,
    height: 25,
  },
  activeIcon: {
    tintColor: '#5E8C2A', // Apply a different color for active icon
  },
});

export default Footer;
