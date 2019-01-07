import React from 'react'
import { StyleSheet, View, Text, ImageBackground  } from 'react-native'

import ecoImage from '../../../../assets/homeUnlogged/eco-quartier-nice.jpg';
import facebookImage from '../../../../assets/homeUnlogged/social-icon/facebook-cta.png';
import twitterImage from '../../../../assets/homeUnlogged/social-icon/twitter-cta.png';
import youtubeImage from '../../../../assets/homeUnlogged/social-icon/youtube-cta.png';
import blogImage from '../../../../assets/homeUnlogged/social-icon/blog-cta.png';


class SocialNetwork extends React.Component {


    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_light_text}>{this.props.translate("home.SocialNetwork.title_1")}</Text>
                <Text style={styles.title_bold_text}>{this.props.translate("home.SocialNetwork.title_2")}</Text>
                <Text style={styles.title_bold_text}>{this.props.translate("home.SocialNetwork.title_3")}</Text>
                <View style={styles.line_separator}></View>
                <View style={styles.zoomImage}>
                        <ImageBackground source={facebookImage} style={{ width: '100%', height: '100%'}}></ImageBackground>
                </View>
                <View style={styles.zoomImage}>
                        <ImageBackground source={twitterImage} style={{ width: '100%', height: '100%'}}></ImageBackground>
                </View>
                <View style={styles.zoomImage}>
                        <ImageBackground source={youtubeImage} style={{ width: '100%', height: '100%'}}></ImageBackground>
                </View>
                <View style={styles.zoomImage}>
                        <ImageBackground source={blogImage} style={{ width: '100%', height: '100%'}}></ImageBackground>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#373b3c',
        paddingBottom: 50,
        paddingTop: 50
    },
    title_light_text: {
        marginTop: 0,
        lineHeight: 40,
        fontSize: 36,
        color: 'white',
        backgroundColor: 'transparent',
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 50,
        marginRight: 50,
    },
    title_bold_text: {
        marginTop: 0,
        lineHeight: 40,
        fontSize: 36,
        color: 'white',
        backgroundColor: 'transparent',
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 50,
        marginRight: 50,
    },
    line_separator: {
        width: 100,
        height: 6,
        marginBottom: 60,
        marginTop: 50,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    zoomImage: {
        flex: 1,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        marginTop: 0,
        marginBottom: 20,
    },
})

export default SocialNetwork