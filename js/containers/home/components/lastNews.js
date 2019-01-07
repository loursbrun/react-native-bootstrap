import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'

import articleImage1 from '../../../../assets/homeUnlogged/blog/Aides-achat-immobilier-600x460.png';
import articleImage2 from '../../../../assets/homeUnlogged/blog/Article-Lexique-immo-600x460.png';
import articleImage3 from '../../../../assets/homeUnlogged/blog/notaire-immobilier-600x460.png';

class LastNews extends React.Component {


    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_text}>{this.props.translate("home.LastNews.last_title")}</Text>
                <Text style={styles.subtitle_text}>{this.props.translate("home.LastNews.blog")}</Text>
                <View style={styles.line_separator}></View>


                <View style={styles.top_article_image_container}>
                        <ImageBackground source={articleImage1} style={styles.top_article_image} resizeMode="contain"></ImageBackground>
                    </View>
                <View style={styles.article_container}>
                    <Text style={styles.title_article}>{this.props.translate("home.LastNews.title_article1")}</Text>
                    <Text style={styles.subtitle_article}>{this.props.translate("home.LastNews.subtitle_article1")}</Text>
                    <Text style={styles.date_article}>{this.props.translate("home.LastNews.date_article1")}</Text>
                </View>


                <View style={styles.top_article_image_container}>
                        <ImageBackground source={articleImage2} style={styles.top_article_image} resizeMode="contain"></ImageBackground>
                    </View>
                <View style={styles.article_container}>
                    <Text style={styles.title_article}>{this.props.translate("home.LastNews.title_article2")}</Text>
                    <Text style={styles.subtitle_article}>{this.props.translate("home.LastNews.subtitle_article2")}</Text>
                    <Text style={styles.date_article}>{this.props.translate("home.LastNews.date_article2")}</Text>
                </View>


                <View style={styles.top_article_image_container}>
                        <ImageBackground source={articleImage3} style={styles.top_article_image} resizeMode="contain"></ImageBackground>
                    </View>
                <View style={styles.article_container}>
                    <Text style={styles.title_article}>{this.props.translate("home.LastNews.title_article3")}</Text>
                    <Text style={styles.subtitle_article}>{this.props.translate("home.LastNews.subtitle_article3")}</Text>
                    <Text style={styles.date_article}>{this.props.translate("home.LastNews.date_article3")}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#eaeaea'
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
    line_separator: {
        width: 100,
        height: 6,
        marginBottom: 60,
        backgroundColor: '#e84242',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    article_container: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 50,
    },
    title_article: {
        lineHeight: 30,
        margin: 20,
        fontSize: 20,
        fontWeight: '300',
    },
    subtitle_article: {
        lineHeight: 24,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 16,
        fontWeight: '600',
    },
    date_article: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        color: 'grey',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 40
    },
    top_article_image_container: {
        flex: 1,
        height: 240,
        marginLeft: 50,
        marginRight: 50,
    },
    top_article_image: {
        width: '100%',
        height: '100%'
       
    }
})

export default LastNews