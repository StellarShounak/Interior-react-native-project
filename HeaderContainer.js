import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Avatar, Header, Icon } from 'react-native-elements';
import SideNavigation from './SideNavigation';

const HeaderContainer = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const drawerRef = useRef(null);

  const handleDrawerOpen = () => {
    setSideNavOpen(true);
  };

  const handleDrawerClose = () => {
    setSideNavOpen(false);
  };

  
  return (
    <TouchableWithoutFeedback onPress={handleDrawerClose}>
      <View style={styles.container}>
        <Header
          placement="left"
          containerStyle={styles.headerContainer}
          leftComponent={
            <View style={styles.profileContainer}>
              <View style={styles.profileInfo}>
                <Avatar
                  rounded
                  source={require('./assets/hero1.jpg')}
                  size="small"
                  containerStyle={styles.avatar}
                />
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Text style={styles.username}>John Doe</Text>
              </View>
            </View>
          }
          rightComponent={
            <View style={styles.headerRight}>
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor="#999"
                />
              </View>
              <View style={styles.headerIcons}>
                <Icon
                  name="bars"
                  type="font-awesome"
                  color="#999"
                  size={20}
                  style={styles.icon}
                  onPress={handleDrawerOpen}
                />
                <View style={styles.cartContainer}>
                  <Icon
                    name="shopping-cart"
                    type="font-awesome"
                    color="#999"
                    size={20}
                    style={styles.cartIcon}
                  />
                </View>
              </View>
            </View>
          }
        />
        <View style={styles.content}>
          {/* Your main content here */}
        </View>
        {isSideNavOpen && ( <SideNavigation />)}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
  },
  headerContainer: {
    backgroundColor: '#8FC743',
    borderBottomWidth: 0,
    elevation: 0,
    paddingTop:17,
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 3,
    marginTop: -35,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 10,
    color: '#555',
    marginBottom: 12,
  },
  username: {
    fontSize: 14,
    marginTop: 20,
    marginLeft: -55,
    color: '#fff',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginLeft: -150,
  },
  searchContainer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    marginRight: 30,
  },
  searchInput: {
    height: 35,
    paddingHorizontal: 15,
    width: 250,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-77,
    marginRight:-27,
    
  },
  cartContainer: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 4,
    marginLeft: -27,
    marginRight: 36,
    marginTop:79,
  },
  cartIcon: {
    color: '#999',
  },
  content: {
    flex: 1,
  },
  sideMenuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 100,
  },
  sideMenuText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HeaderContainer;
