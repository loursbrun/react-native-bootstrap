import React, { Component } from 'react';
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, TouchableOpacity } from 'react-native';

class FlatlistThematics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    GetItem(title) {
        Alert.alert(title);
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 20,
                    width: "100%",
                    backgroundColor: "transparent",
                }}
            />
        );
    }

    webCall = () => {

        return fetch('http://www.mocky.io/v2/5bbc7cbd320000560027ec6c') 
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    componentDidMount() {
        this.webCall();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }

        return (
            <View style={styles.MainContainer}>
                <FlatList style={styles.FlatListContainer}
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={this.GetItem.bind(this, item.title)} style={{ flex: 1, flexDirection: 'row' }}>
                            <Image source={{ uri: item.icon }} style={styles.imageView} />
                            <View style={styles.textContainer}>
                                <Text style={styles.titleText} allowFontScaling={false}>{this.props.translate("profile.language") === "FR" ? item.title_fr : item.title_en}</Text>
                                <Text style={styles.descriptionText} allowFontScaling={false}>{this.props.translate("profile.language") === "FR" ?  item.description_fr : item.description_en }</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: (Platform.OS === 'ios') ? 0 : 0,
    },
    FlatListContainer: {
        margin: 50,
        marginBottom: 0,
    },
    imageView: {
        width: 50,
        height: 50,
    },

    textContainer: {
       marginLeft: 20,
       flex: 1,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    descriptionText: {
        fontSize: 16,
        color: '#000',
        marginTop: 10,
    }
});

export default FlatlistThematics