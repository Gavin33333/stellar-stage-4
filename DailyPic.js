import React, { Component } from "react"
import { Alert, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Linking  } from "react-native" 
import axios from 'axios'
import { styleSheets } from "min-document"

export default class DailyPicScreen extends Component {
    render(){
        return(
            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Daily Pic Screen</Text>

                getAPOD = () => {
                    axios
                    .get("https://api.nasa.gov/planetary/apod?api_key=CoGdtQeIWklmbziFVQgpfK3JfP4dBSAlQg8imDGw")
                    .then(response => {
                        this.setState({apod: response.data})
                    })
                    .catch(error => {
                        Alert.alert(error.message)
                    })
                }
<View style={styleSheets.container}>
    <SafeAreaView style={styleSheets.droidSafeArea}/>
    <ImageBackground
    source={require('../assets/star-background.jpg')} style={styles.backgroundImage}>
        <Text style ={styles.routeText}>Astronomy picture of the day</Text>
        <Text style={styles.titleText}>{this.state.apod.title}</Text>
        <TouchableOpacity style={styles.listContainer}
        onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
        >
            <View style={styles.iconContainer}>
                <Image source={require("../assets/play-video.png")} style={{ width:50, height: 50}}></Image>
            </View>
        </TouchableOpacity>

        <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
    </ImageBackground>
</View>
            </View>
            
        )
    }
}