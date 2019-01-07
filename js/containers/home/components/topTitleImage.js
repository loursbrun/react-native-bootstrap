import React from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'

import ecoImage from '../../../../assets/homeUnlogged/eco-quartier-nice.jpg';

class TopTitleImage extends React.Component {


    _onPressButton() {
        console.log("Press button")
    }

    render() {
        return (
            <View style={styles.main_container}>
                <ImageBackground source={ecoImage} style={{ width: '100%', height: '100%' }}>
                    <Text style={styles.title_text}>{this.props.translate("home.TopTitleImage.title")}</Text>
                    <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                        <Text style={styles.buttonText}>{this.props.translate("home.TopTitleImage.button")}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 500,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_text: {
        marginTop: 150,
        lineHeight: 50,
        fontSize: 40,
        backgroundColor : 'transparent',
        margin: 10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        height: 100,
        marginTop: 20,
        alignItems:'center'
    },
    buttonText: {
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 20,
        backgroundColor: 'white',
        fontSize: 16,
        letterSpacing: 1,
        color: 'red'
    }
})

export default TopTitleImage