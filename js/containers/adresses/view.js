import React from 'react';
import styles from './styles';
import { StyleSheet, ScrollView, View, Text,  FlatList, ActivityIndicator, TouchableOpacity, Image  } from 'react-native';
import {Link, LinkWithoutNavigation} from '@core-components';


import left from '../../../assets/left.png';


/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const { drawer } = this.props;
    return (

        <View style={[styles.container]}>
            {
                
				

				<FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>

            <View id="item_container" style={{
              margin: 20,
              backgroundColor: 'white',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12
            }}>
              <View id="thumbnail" style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: '100%', flex: 1 }}></Image>
              </View>
              <Text id="adress" style={{ height: 60, flex: 1, fontSize: 16, lineHeight: 60, paddingLeft: 10 }}>{item.adress}</Text>
              <View id="line" style={{ height: 1, flex: 1, backgroundColor: '#ececec' }}></View>
              <View id="bottom_container" style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.onPress} id="share" style={{ height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                  <Image source={{ uri: 'https://www.iconsdb.com/icons/preview/gray/sharethis-xxl.png' }} style={{ width: 26, height: 26, tintColor: 'grey', }}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressWidthValue.bind(this,'compare')} id="compare" style={{ height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                  <Image source={{ uri: 'https://www.shareicon.net/data/128x128/2015/09/12/100112_compare_512x512.png' }} style={{ width: 30, height: 30, tintColor: 'grey' }}></Image>
                </TouchableOpacity>
                <View id="space" style={{ height: 50, flex: 2, margin: 4 }}></View>
                <TouchableOpacity onPress={this.onPressWidthItemValues.bind(this,item)} id="like" style={{ height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                  <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/miu/24/common-heart-like-favourite-favorite-outline-stroke-512.png' }} style={{ width: 30, height: 30, tintColor: 'red' }}></Image>
                </TouchableOpacity>
                <TouchableOpacity id="premium" style={{ height: 50, backgroundColor: '#E84242', flex: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 4, margin: 4 }}>
                  <Image source={{ uri: 'https://icon-icons.com/icons2/67/PNG/512/starschema_estrella_13689.png' }} style={{ width: 16, height: 16, tintColor: 'white' }}></Image>
                  <Text style={{ fontSize: 16, lineHeight: 50, paddingLeft: 5, color: 'white' }}>Premium</Text>
                </TouchableOpacity>
              </View>
            </View>


          }
          keyExtractor={({ id }, index) => id}
        />


				
            }

            {
                    !drawer?(
                        <Link link="DrawerOpen" style={[styles.trigger]}>
                            <Image
                                resizeMode="cover"
                                source={left}
                                style={styles.triggerIcon}
                            />
                        </Link>
                    ):null
                }
        </View>
    )
}
module.exports = view;
