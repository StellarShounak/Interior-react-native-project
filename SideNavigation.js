import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SideNavigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sideNavigation}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Side</Text>
        </View>
        <View style={styles.content}>
        <Text style={styles.sideMenuText}>My Account</Text>
          <Text style={styles.sideMenuText}>Showcase</Text>
          <Text style={styles.sideMenuText}>Services</Text>
          <Text style={styles.sideMenuText}>Projects</Text>
          <Text style={styles.sideMenuText}>Inbox</Text>
          <Text style={styles.sideMenuText}>About Us</Text>
          <Text style={styles.sideMenuText}>Contact Us</Text>
          <Text style={styles.sideMenuText}>Log Out</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 38,
    bottom: 0,
    left: 0,
    width: '55%',
    height: '50%',
    backgroundColor: '#000',
    flexDirection: 'column',
    zIndex: 100,
  },
  sideNavigation: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header: {
    backgroundColor: '#8FC743',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  sideMenuText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SideNavigation;
