import * as React from 'react';
import { render } from 'react-dom';
import { Text, View,  TouchableOpacity, StyleSheet,Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component{
goToJokeScreen=()=>{
    this.props.navigation.navigate('JokeScreen');
}
goToHoroScope=()=>{
    this.props.navigation.navigate('HoroScope');
}
goToNewsScreen=()=>{
    this.props.navigation.navigate('NewsScreen');
}
goToWeatherScreen=()=>{
    this.props.navigation.navigate('WeatherScreen');
}
render(){
    return(
        <View>
            <AppHeader />
<TouchableOpacity
style={[styles.forButton,{backgroundColor:'red'}]}
onPress={()=>{
    this.goToJokeScreen()
}}>
<Text style={styles.forText}>Read a Joke</Text>
</TouchableOpacity>

<TouchableOpacity
style={[styles.forButton,{backgroundColor:'orange'}]}
onPress={()=>{
    this.goToHoroScope()
}}>
<Text style={styles.forText}>HoroScope</Text>
</TouchableOpacity>

<TouchableOpacity
style={[styles.forButton,{backgroundColor:'yellow'}]}
onPress={()=>{
    this.goToNewsScreen()
}}>
<Text style={styles.forText}>News</Text>
</TouchableOpacity>

<TouchableOpacity
style={[styles.forButton,{backgroundColor:'blue'}]}
onPress={()=>{
    this.goToWeatherScreen()
}}>
<Text style={styles.forText}>Weather</Text>
</TouchableOpacity>

<Text>     </Text>

<Text style={[styles.forText]}>Rate Us</Text>

<TouchableOpacity style={[styles.forButton]}>
    <Image
    style={{width:200,height:100}} 
    source={require('../assets/like.png')}/>
    
</TouchableOpacity>

<TouchableOpacity style={[styles.forButton]}>
    <Image
    style={{width:200,height:100}} 
    source={require('../assets/dislike.jfif')}/>
    
</TouchableOpacity>
        </View>
    )
}
}

const styles = StyleSheet.create({
    forText: {
      textAlign: 'center',
      color: 'black',
      fontWeight:"bold"
    },
    forButton: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: 15,
      marginTop: 100,
      width: 200,
      height: 130,
      backgroundColor: 'green',
    },
  });