import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'

import youtubeImage from '../../../../assets/homeUnlogged/capitaine.png';
import ecoImage from '../../../../assets/homeUnlogged/fusee.jpg';

class FollowYoutube extends React.Component {


    render() {
        return (
            <View style={styles.main_container}>
                <ImageBackground source={ecoImage} style={{ width: '100%', height: '100%' }}>
                    <Text style={styles.title_text}>{this.props.translate("home.FollowYoutube.title")}</Text>
                    <Text style={styles.subtitle_text}>{this.props.translate("home.FollowYoutube.subtitle")}</Text>
                    <View style={styles.line_separator}></View>
                    <Text style={styles.description_text}>{this.props.translate("home.FollowYoutube.description")}</Text>
                    <View style={styles.zoomImage}>
                        <ImageBackground source={youtubeImage} style={{ width: '100%', height: '100%' }}></ImageBackground>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 800,
    },
    title_text: {
        lineHeight: 50,
        marginTop: 50,
        fontSize: 36,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '200',
        marginLeft: 50,
        marginRight: 50,
    },
    subtitle_text: {
        marginTop: 0,
        lineHeight: 50,
        fontSize: 36,
        backgroundColor: 'transparent',
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 0,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 50
    },
    zoomImage: {
        flex: 1,
        height: 250,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 0,
        marginBottom: 50,
    },
    line_separator: {
        width: 100,
        height: 6,
        marginBottom: 60,
        backgroundColor: '#e84242',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    description_text: {
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 40,
        backgroundColor: 'transparent',
        fontSize: 16,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
})

export default FollowYoutube