import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

export default class AppContadorDeAgua extends Component {

    render(){
        return (
          <View style={styles.body} >
              <ImageBackground source={require('./images/waterbg.png')} 
                style={styles.bgimage} >

              </ImageBackground>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      body:{
        flex:1,
        paddingTop:20
      },
      bgimage:{
        flex: 1,
        width:null
      }
    });