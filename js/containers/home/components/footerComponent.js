import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'

import bgFooterImage from '../../../../assets/homeUnlogged/bg-footer.png';
import regional_image from '../../../../assets/homeUnlogged/regional-logo.jpg';

class FooterComponent extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <ImageBackground source={bgFooterImage} style={{ width: '100%', height: '100%' }}>

                    <View style={styles.text_container}>
                        <Text style={styles.title_light_text}>{this.props.translate("home.FooterComponent.link")}</Text>
                        <View style={styles.line_separator}></View>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.price")}</Text>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.blog")}</Text>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.cgv")}</Text>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.cookies")}</Text>
                    </View>

                    <View style={styles.text_container}>
                        <Text style={styles.title_light_text}>{this.props.translate("home.FooterComponent.about_us")}</Text>
                        <View style={styles.line_separator}></View>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.eval")}</Text>
                    </View>

                    <View style={styles.text_container}>
                        <Text style={styles.title_light_text}>{this.props.translate("home.FooterComponent.by_kinaxia")}</Text>
                        <View style={styles.line_separator}></View>
                        <Text style={styles.title_text}><Text style={{ fontWeight: 'bold' }}>{this.props.translate("home.FooterComponent.kinaxia")}</Text></Text>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.adress_1")}</Text>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.adress_2")}</Text>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.adress_3")}</Text>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.phone")}</Text>
                        <Text style={styles.title_text}>{this.props.translate("home.FooterComponent.email")}</Text>
                    </View>

                    <View style={styles.text_container}>
                        <Text style={styles.title_light_text}>{this.props.translate("home.FooterComponent.by_kinaxia")}</Text>
                        <View style={styles.line_separator}></View>
                    </View>
                    <View style={styles.regional_image}>
                        <ImageBackground source={regional_image} resizeMode="contain" style={{ width: '100%', height: '100%' }}></ImageBackground>
                    </View>
                    <Text style={styles.legend_image_text}>{this.props.translate("home.FooterComponent.by_kinaxia")}</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 1100,
        backgroundColor: 'grey'
    },
    text_container: {
        margin: 50,
        marginBottom: 20,
    },
    title_text: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'transparent',
    },
    title_light_text: {
        fontSize: 20,
        color: 'grey',
        backgroundColor: 'transparent'
    },
    line_separator: {
        width: '100%',
        height: 1,
        backgroundColor: 'grey',
        marginTop: 10,
        marginBottom: 30,

    },
    regional_image: {
        height: 100,
        marginLeft: 80,
        marginRight: 80,
        marginTop: -40,
        marginBottom: 0,
    },
    legend_image_text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
        marginRight: 30,
        marginLeft: 30,
        fontStyle: 'italic',
        marginBottom: 50
    }
})

export default FooterComponent