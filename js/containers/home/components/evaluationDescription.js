import React from 'react'
import { StyleSheet, View, Text  } from 'react-native'

import ecoImage from '../../../../assets/homeUnlogged/eco-quartier-nice.jpg';

class EvaluationDescription extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
               <Text style={styles.title_text}>{this.props.translate("home.evaluationDescription.title.first_line")}</Text>
               <Text style={styles.title_text}>{this.props.translate("home.evaluationDescription.title.second_line")}</Text>
               <Text style={styles.description_text}>
               {this.props.translate("home.evaluationDescription.description")}
               </Text>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 50
    },
    title_text: {
        lineHeight: 50,
        fontSize: 34,
        backgroundColor : 'transparent',
        marginLeft: 50,
        marginRight: 50,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    description_text: {
        marginTop: 30,
        marginBottom: 50,
        lineHeight: 26,
        fontSize: 20,
        backgroundColor : 'transparent',
        marginLeft: 30,
        marginRight: 30,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
    },
})

export default EvaluationDescription