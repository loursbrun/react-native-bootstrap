import React from 'react'
import { StyleSheet, View, Text, FlatList, ImageBackground, TouchableHighlight } from 'react-native'
import EvaluationEmplacementItem from './subComponents/evaluationEmplacementItem'

import zoomImage from '../../../../assets/homeUnlogged/emplacementZoom/01_ecran_note.jpg';

import thematicsData from './data/thematicsData'
import evaluationEmplacementData from './data/evaluationEmplacementData'
import Navigator from  '../../../containers/navigator';
import { setLanguages, addTranslation } from 'react-localize-redux'

class EvaluationEmplacement extends React.Component {

    render() {
          
        return (
            
            <View style={styles.main_container}>
                <Text style={styles.title_text}>{this.props.translate("home.EvaluationEmplacement.title")}</Text>
                <Text style={styles.subtitle_text}>{this.props.translate("home.EvaluationEmplacement.subtitle")}</Text>
                <View style={styles.line_separator}></View>
                <FlatList
                    data={evaluationEmplacementData}
                    renderItem={({ item }) => {
                        return (
                            <EvaluationEmplacementItem  keyExtractor={item.key} description={this.props.translate("profile.language") === "FR" ? item.description_fr : item.description_en}  />
                        );
                    }}
                />
                  <View style={styles.zoomImage}>
                        <ImageBackground source={zoomImage} style={{ width: '100%', height: '100%' }}></ImageBackground>
                    </View>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 50,
        backgroundColor: '#eaeaea'
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
        marginTop: 50,
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
        flex: 1,
        height: 200,
        marginTop: 30,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 100,
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

export default EvaluationEmplacement