import React from 'react';
import styles from './styles';
import { Text, View} from 'react-native';


/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const { drawer } = this.props;
    return (

        <View style={[styles.container]}>
           <Text>Test</Text>
        </View>
    )
}
module.exports = view;
