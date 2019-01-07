import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import zoomImage from '../../../../../assets/homeUnlogged/eco-quartier-nice.jpg';

class evaluationEmplacementItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        console.log(this.props.keyExtractor)

        if (this.props.keyExtractor !== "0") {
            return (
                <View style={styles.text_container}>
                    <Text style={styles.descriptionText}>{this.props.description}</Text>
                </View>
            )
        } else {
            return (
                    <View style={styles.main_container}>
                        <View style={styles.text_container_selected}>
                            <Text style={styles.descriptionText_selected}>{this.props.description}</Text>
                        </View>
                        <View style={styles.triangle_container}>
                            <View style={styles.triangle} />
                        </View>
                    </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    main_container: {

    },
    text_container: {
        marginTop: 5,
        marginBottom: 5,
        marginRight: 50,
        marginLeft: 50,
        backgroundColor: "white"
    },
    text_container_selected: {
        marginTop: 5,
        marginBottom: 5,
        marginRight: 50,
        marginLeft: 50,
        backgroundColor: "#e84242"
    },
    descriptionText: {
        padding: 20,

    },
    descriptionText_selected: {
        padding: 20,
        color: 'white'
    },
    triangle_container: {
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        right: 40,
        top: 30
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        overflow: 'hidden',
        borderTopWidth: 10,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftWidth: 10,

        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#e84242',
    },
    
})

export default evaluationEmplacementItem