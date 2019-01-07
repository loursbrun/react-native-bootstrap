import React from 'react'
import { StyleSheet, View, Text, ImageBackground  } from 'react-native'

import tabletImage from '../../../../assets/homeUnlogged/tablette.png';

class EstimationImmo extends React.Component {


    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_text}>{this.props.translate("home.EstimationImmo.title")}</Text>
                <Text style={styles.subtitle_text}>{this.props.translate("home.EstimationImmo.subtitle")}</Text>
                <View style={styles.line_separator}></View>
                <View style={styles.zoomImage}>
                        <ImageBackground source={tabletImage} style={{ width: '100%', height: '100%' }}></ImageBackground>
                </View>
                <Text style={styles.description_text}>{this.props.translate("home.EstimationImmo.description_first_line")}</Text>
                <Text style={styles.description_text}>{this.props.translate("home.EstimationImmo.description_second_line")}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#eaeaea',
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
    description_text: {
        marginTop: 0,
        lineHeight: 20,
        fontSize: 16,
        backgroundColor : 'transparent',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 0,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30
    },
    zoomImage: {
        flex: 1,
        height: 250,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 0,
        marginBottom: 20,
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

export default EstimationImmo