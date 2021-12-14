import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from 'react-native';
import data from './data';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <LinearGradient
        colors={['#2C5364', '#203A43', '#0F2027']}
        style={styles.linearGradient}>
        <Text style={styles.heading}>One Shop</Text>
        <TouchableOpacity onPress={() => {
                Linking.openURL("https://api.whatsapp.com/send?phone=919977530047").catch(err => {
                  console.error('Failed opening page because: ', err);
                  alert('Failed to open page');
                });
              }}>
              <Text style={styles.button}>Share Your Documents</Text>
        
        </TouchableOpacity>
        <View style={styles.gridContainer}>
          {data.map(logo => (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(logo.url).catch(err => {
                  console.error('Failed opening page because: ', err);
                  alert('Failed to open page');
                });
              }}
              key={logo.id}
              style={styles.box}>
              <Image source={logo.image} style={styles.logo} />
              <Text style={styles.logotext}>{logo.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gridContainer: {
    flex: 1,
    marginBottom: '210%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  box: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 5,
  },
  logo: {
    width: '71%',
    height: '66%',
  },
  logotext: {
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    marginTop: 3,
  },
  heading: {
    fontFamily: 'sans-serif-medium',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    // backgroundColor: '#000',
  },
  button:{
    color: '#FFFFFF',
    backgroundColor:"#008000",
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 40,
    paddingHorizontal: 3,
    paddingVertical: 4,
    marginVertical: 1,
    marginBottom: 29,
    borderRadius: 100,
    fontWeight: 'bold',
  }
});
