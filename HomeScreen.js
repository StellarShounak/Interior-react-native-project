import React, { useRef} from 'react';
import  { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView , TouchableHighlight, TouchableWithoutFeedback, Modal} from 'react-native';
import { Avatar, Header, Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import HeaderContainer from './HeaderContainer';
import SideNavigation from './SideNavigation';




const HomeScreen = () => {


  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const drawerRef = useRef(null);

  const handleDrawerOpen = () => {
    setSideNavOpen(true);
  };

  const handleDrawerClose = () => {
    setSideNavOpen(false);
  };
    

  return (
   
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
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
        </View>
        </TouchableWithoutFeedback>
      
        <View style={styles.content}>
        
          <View style={styles.swiperContainer}>
          
         
            <Swiper style={styles.swiper} loop={false}>

            <TouchableWithoutFeedback onPress={handleDrawerClose}>
            <View style={styles.card}>   
            <Image
              source={require('./assets/banner.png')}
              style={styles.cardImage}
              resizeMode="cover"
             
            />
          </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleDrawerClose}>
          <View style={styles.card}>
            <Image
              source={require('./assets/banner.png')}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleDrawerClose}>
          <View style={styles.card}>
            <Image 
            source={require('./assets/banner.png')} 
            style={styles.cardImage} 
            resizeMode="cover" />
          </View>
          </TouchableWithoutFeedback>
            </Swiper>
            
          </View>
      

      <TouchableWithoutFeedback onPress={handleDrawerClose}>
          <Text style={styles.marketplaceText}>Marketplace</Text>
          </TouchableWithoutFeedback>

          
    <TouchableWithoutFeedback onPress={handleDrawerClose}>
      <Text style={styles.viewAllText}>VIEW ALL</Text>
    </TouchableWithoutFeedback>


      <View style={styles.gap}></View>

      <View style={styles.rectangularContainer}>
     <TouchableWithoutFeedback onPress={handleDrawerClose}>
        <View style={[styles.rectangularCard, styles.cardWithMargin]}>
          {/* Content for the third rectangular card */}
           
          <Image source={require('./assets/Rectangle21.png')} style={styles.cardImageM} resizeMode="cover" />
          <Text style={styles.cardTextM}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
          
          <View style={styles.cardContent}>
          <Text style={[styles.firstText]}>$ 130</Text>
             <Text style={styles.secondText}>1236 Reviews</Text>
          </View>

        </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={handleDrawerClose}>
        <View style={styles.rectangularCard}>
          {/* Content for the fourth rectangular card */}
          <Image source={require('./assets/Rectangle26.png')} style={styles.cardImageM} resizeMode="cover" />
          <Text style={styles.cardTextM}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>

          <View style={styles.cardContent}>
          <Text style={[styles.firstText]}>$ 130</Text>
             <Text style={styles.secondText}>1236 Reviews</Text>
          </View>

        </View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback onPress={handleDrawerClose}>
      <Text style={styles.Homeservices}>Home Services</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleDrawerClose}>
      <Text style={styles.viewAllTextservices}>VIEW ALL</Text>
      </TouchableWithoutFeedback>

      <View style={styles.gap}></View>

      <View style={styles.rectangularContainer}>
      <TouchableWithoutFeedback onPress={handleDrawerClose}>
        <View style={[styles.rectangularCard, styles.cardWithMargin]}>
          {/* Content for the third rectangular card */}
          <Image source={require('./assets/Rectangle23.png')} style={styles.cardImageM} resizeMode="cover" />
          
          <Text style={styles.cardPText}> Parallel Kitchen
          </Text>
          
          <View style={styles.cardContent}>
          
          <Text style={styles.secondTextHS}>$ 150</Text>
          
             <Text style={styles.firstTextHS}>$ 130</Text>
         </View>
        

         <View style={styles.cutLine}></View>

           <View style={styles.LastcardContentofhomeservice}>
              <Icon name="eye" type="font-awesome" color="#999" size={18} style={styles.eyeIcon} />
              <Text style={styles.viewTextbesideEye}>56 people viewing this</Text>
            </View>
            
        </View>
        </TouchableWithoutFeedback>



        <TouchableWithoutFeedback onPress={handleDrawerClose}>  
        <View style={styles.rectangularCard}>
          {/* Content for the fourth rectangular card */}
          <Image source={require('./assets/Rectangle24.png')} style={styles.cardImageM} resizeMode="cover" />
          <Text style={styles.cardPText}> Parallel Kitchen
          </Text>

          <View style={styles.cardContent}>
          
             <Text style={styles.secondTextHS}>$ 150</Text>
             <Text style={[styles.firstTextHS]}>$ 130</Text>
          </View>
           
          <View style={styles.cutLine}></View>

          <View style={styles.LastcardContentofhomeservice}>
              <Icon name="eye" type="font-awesome" color="#999" size={18} style={styles.eyeIcon} />
              <Text style={styles.viewTextbesideEye}>56 people viewing this</Text>
            </View>

        </View>
        </TouchableWithoutFeedback>
      </View>

      <Text style={styles.Projectshowcase}>Project Showcase</Text>
      <Text style={styles.viewAllTextproject}>VIEW ALL</Text>

      <View style={styles.gap}></View>

      <View style={styles.rectangularContainer}>
        <View style={[styles.rectangularCard, styles.cardWithMargin]}>
          {/* Content for the third rectangular card */}
          <Image source={require('./assets/Rectangle25.png')} style={styles.cardImageM} resizeMode="cover" />
          <Text style={styles.cardPText}>Livespace Select: Modular Interiors
          </Text>

          <Text style={styles.cardP2Text}>Choose high quality, budget-friendly modular solutions like kitchens, wardrobes, TV units,
          </Text>

          <Text style={styles.cardP3Text}>Lets tell you more →
          </Text>

        </View>
        <View style={styles.rectangularCard}>
          {/* Content for the fourth rectangular card */}
          <Image source={require('./assets/Rectangle26.png')} style={styles.cardImageM} resizeMode="cover" />
          <Text style={styles.cardPText}>Livspace Select: Modular Interiors
          </Text>
          <Text style={styles.cardP2Text}>Choose high quality, budget-friendly modular solutions like kitchens, wardrobes, TV units,
          </Text>

          <Text style={styles.cardP3Text}>Lets tell you more →
          </Text>

        </View>
      </View>



        </View>





        {isSideNavOpen && ( <SideNavigation />)}















      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 1,
    
  },

  headerContainer: {
    backgroundColor: '#8FC743',
    borderBottomWidth: 0,
    elevation: 0,
    paddingTop:48,
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
  




  
  swiperContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  swiper: {
    marginTop: 5,
    height: 141,
    marginBottom: 9,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: '91%',
    borderRadius: 10,
    marginTop: -17,
    marginBottom: -4,
  },
  marketplaceText: {
    marginTop: -190,
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -24,
    marginLeft: 15,
  },
  viewAllText: {
    marginBottom: 10,
    fontSize: 12,
    color: '#8FC743',
    marginLeft: 280,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardImageM: {
    width: '132%',
    height: '50%',
    borderRadius: 10,
    marginTop: -20,
    marginBottom: -4,
    marginLeft:-20,
  },

  cardTextM: {
    fontSize: 12,
        lineHeight:18,
        fontWeight:400,
        color: '#555',
        textAlign: 'left',
        marginHorizontal: 12,
        marginTop: 10,
        marginLeft:-10,
    },

   
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: -15,
        marginTop: 20,
      },

      firstText: {
        fontSize:18,
        marginRight: 19,
        color: '#FF0000',
        fontWeight: 'bold',
        marginLeft:3,
      },

      secondText:{
        fontSize:12,
        fontWeight: 200,
        marginTop:5,
        marginRight:3,
      },


      firstTextHS:{
        fontSize:18,
        marginRight: 64,
        color: '#FF0000',
        fontWeight: 'bold',
        marginLeft:3,
      }, 

      secondTextHS:{
        fontSize:12,
        fontWeight: 200,
        marginTop:5,
        marginRight:3,
        textDecorationLine: 'line-through'
        
      },

      cutLine: {
        marginTop:13,
        width: 166,
        backgroundColor: '#EDEDED',
        marginHorizontal: 10,
        height:2,
        marginLeft:-20,
      },

      LastcardContentofhomeservice:{
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: -15,
        marginTop: 20,

      },

      viewTextbesideEye:{
           fontSize:11,
           fontWeight:200,
           marginRight:9,

      },
      eyeIcon: {
        marginRight: 5,
        marginLeft:2,
      },


      

    cardPText:{
        fontSize: 12,
        lineHeight:18,
        fontWeight:400,
        color: '#555',
        textAlign: 'left',
        marginHorizontal: 12,
        marginTop: 10,
        marginLeft:-10,
        fontWeight: 'bold',
    },

    cardP2Text:{
        fontSize: 7,
        lineHeight:12,
        fontWeight:400,
        color: '#555',
        textAlign: 'center',
        marginHorizontal: 12,
        marginTop: 10,
        marginLeft:-10,
          
    },

    cardP3Text:{
        fontSize: 10,
        lineHeight:27,
        fontWeight:500,
        color: '#8FC743',
        textAlign: 'left',
        marginHorizontal: 12,
        marginTop: 10,
        marginLeft:-10,
    },




  rectangularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 250,
    marginBottom: 30,
  },
  rectangularCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  cardWithMargin: {
    marginRight: 10,
  },
  Homeservices: {
    marginTop: -10,
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -24,
    marginLeft: 15,
  },
  viewAllTextservices: {
    marginBottom: 10,
    fontSize: 12,
    color: '#8FC743',
    marginLeft: 280,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Projectshowcase: {
    marginTop: -10,
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -24,
    marginLeft: 15,
  },
  viewAllTextproject: {
    marginBottom: 10,
    fontSize: 12,
    color: '#8FC743',
    marginLeft: 280,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export default HomeScreen;