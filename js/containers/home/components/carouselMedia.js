import React from 'react'
import { StyleSheet, View, Text, ImageBackground  } from 'react-native'

import ecoImage from '../../../../assets/homeUnlogged/eco-quartier-nice.jpg';
import tabletImage from '../../../../assets/homeUnlogged/media.png';


class CarouselMedia extends React.Component {


    render() {
        return (
            <View style={styles.main_container}>
              <Text style={styles.title_text}>{this.props.translate("home.CarouselMedia.title")}</Text>
                <Text style={styles.subtitle_text}>{this.props.translate("home.CarouselMedia.subtilte")}</Text>
                <View style={styles.line_separator}></View>
                <View style={styles.zoomImage}>
                        <ImageBackground source={tabletImage} style={{ width: '100%', height: '100%' }}></ImageBackground>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        paddingTop: 50,
    },
    title_text: {
        lineHeight: 50,
        fontSize: 36,
        backgroundColor : 'transparent',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        fontWeight: '200',
        marginLeft: 50,
        marginRight: 50,
    },
    subtitle_text: {
        marginTop: 0,
        lineHeight: 50,
        fontSize: 36,
        backgroundColor : 'transparent',
        margin: 10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 0,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 50
    },
    zoomImage: {
        height: 100,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 0,
        marginBottom: 0,
        marginBottom: 40
    },
    line_separator: {
        width: 100,
        height: 6,
        marginBottom: 60,
        backgroundColor: '#e84242',
        alignSelf: 'center',
        justifyContent: 'center',
    }
})

export default CarouselMedia