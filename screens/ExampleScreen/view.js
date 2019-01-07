import React from 'react';
import styles from './styles';
import { Text, View, TouchableOpacity} from 'react-native';


/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    return (

        <View style={[styles.container]}>
           <Text>Test</Text>
           <TouchableOpacity onPress={() => this.removeAdress(0)}>
               <Text>Delete adress at index 0</Text>
           </TouchableOpacity>
        </View>
    )
}
module.exports = view;
