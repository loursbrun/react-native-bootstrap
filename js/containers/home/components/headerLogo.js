import React from 'react'
import { StyleSheet, View, Image  } from 'react-native'

import ecoImage from '../../../../assets/homeUnlogged/eco-quartier-nice.jpg';

class HeaderLogo extends React.Component {


    render() {
        return (
            <View style={styles.main_container}>
            <View style={styles.background_container}></View>
               <Image style={styles.image_container} source={require('../../../../assets/logo-basic-hr.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
       height: 120,
       flex: 1,
       position: 'absolute',
       width: '100%'
    },
    background_container: {
        height: 120,
        flex: 1,
        backgroundColor: 'black',
        position: 'absolute',
        opacity: 0.3,
        width: '100%'
    },
    image_container: {
        height: 60,
        marginTop: 50,
        marginLeft: 20,
        width: 200,
        resizeMode: 'contain'
    }
})

export default HeaderLogo