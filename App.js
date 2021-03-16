import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import HomeScreen from './screens/HomeScreen';
import JokeScreen from './screens/JokeScreen';
import HoroScope from './screens/HoroScope';
import NewsScreen from './screens/NewsScreen';
import WeatherScreen from './screens/WeatherScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  HoroScope: HoroScope,
  NewsScreen: NewsScreen,
  WeatherScreen: WeatherScreen,
});
const AppContainer = createAppContainer(AppNavigator);