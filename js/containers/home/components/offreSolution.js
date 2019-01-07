import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'

import redBackgroundImage from '../../../../assets/homeUnlogged/cityscan-red-bg.jpg';
import validDarkGreyIcon from '../../../../assets/homeUnlogged/valid_dark_grey.png';
import validLightGreyIcon from '../../../../assets/homeUnlogged/valid_light_grey.png';

class OffreSolution extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <ImageBackground source={redBackgroundImage}  style={{ width: '100%', height: '100%' }}>
                    <View style={styles.title_container}>
                        <Text style={styles.title_text}>{this.props.translate("home.OffreSolution.title")}</Text>
                        <Text style={styles.title_text}>"{this.props.translate("home.OffreSolution.subtitle")}"</Text>
                        <View style={styles.line_separator}></View>

                        <View style={styles.bloc_checklist_container}>
                            <Text style={styles.title_light_text}>{this.props.translate("home.OffreSolution.bloc1.title_light")}</Text>
                            <Text style={styles.title_bold_text}>{this.props.translate("home.OffreSolution.bloc1.title_bold_text")}</Text>
                            <View style={styles.line_light_separator}></View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validDarkGreyIcon} ></Image>
                                <Text style={styles.line_bold_text}>{this.props.translate("home.OffreSolution.bloc1.line_bold_text")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc1.line_1")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc1.line_2")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc1.line_3")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc1.line_4")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc1.line_5")}</Text>
                            </View>
                        </View>


                        <View style={styles.bloc_checklist_container}>
                            <Text style={styles.title_light_text}>{this.props.translate("home.OffreSolution.bloc2.title_light")}</Text>
                            <Text style={styles.title_bold_text}>{this.props.translate("home.OffreSolution.bloc2.title_bold_price")} <Text style={{ fontWeight: '200' }}>{this.props.translate("home.OffreSolution.bloc2.title_adress")}</Text></Text>
                            <Text style={styles.red_line_text}>{this.props.translate("home.OffreSolution.bloc2.title_red")}</Text>
                            <View style={styles.line_light_separator}></View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validDarkGreyIcon} ></Image>
                                <Text style={styles.line_bold_text}>{this.props.translate("home.OffreSolution.bloc2.line_1")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc2.line_2")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc2.line_3")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc2.line_4")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc2.line_5")}</Text>
                            </View>
                            <View style={styles.checkList_line_conainer}>
                                <Image style={styles.icon_valid_image} source={validLightGreyIcon} ></Image>
                                <Text style={styles.line_light_text}>{this.props.translate("home.OffreSolution.bloc2.line_6")}</Text>
                            </View>
                            <View style={styles.line_light_separator}></View>

                            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                                <Text style={styles.buttonText}>{this.props.translate("home.OffreSolution.button")}</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    title_text: {
        marginTop: 0,
        lineHeight: 50,
        color: '#ffffff',
        fontSize: 36,
        backgroundColor: 'transparent',
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 0,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 0
    },
    title_container: {
        marginTop: 40,
    },
    line_separator: {
        width: 100,
        height: 6,
        marginBottom: 60,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    bloc_checklist_container: {
        padding: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 50,
        backgroundColor: 'white'
    },
    title_light_text: {
        fontSize: 24,
    },
    title_bold_text: {
        fontSize: 30,
        marginTop: 10,
        fontWeight: '800',
        marginBottom: 20
    },
    line_light_separator: {
        width: '100%',
        height: 1,
        marginBottom: 40,
        marginTop: 40,
        backgroundColor: '#eaeaea'
    },
    checkList_line_conainer: {
        marginTop: 0,
        flexDirection: 'row'
    },
    icon_valid_image: {
        width: 20,
        height: 20
    },
    line_bold_text: {
        marginLeft: 20,
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '400'
    },
    line_light_text: {
        marginBottom: 10,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '400',
        color: 'grey'
    },
    red_line_text: {
        color: 'red',
        fontSize: 16,
    },
    button: {
        height: 100,
        marginTop: 20,
        alignItems:'center'
    },
    buttonText: {
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 15,
        backgroundColor: '#23272b',
        fontSize: 16,
        letterSpacing: 1,
        color: 'white'
    }
})

export default OffreSolution