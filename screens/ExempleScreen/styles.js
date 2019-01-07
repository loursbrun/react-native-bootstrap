import React from 'react-native';
import {Dimensions} from 'react-native';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop : 50,
    },
    image: {
        flex: 1,
        width: deviceWidth
    }

});

export default styles;
