import React from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'

import solutionsData from './data/solutionsData'
import iconSolution1 from '../../../../assets/homeUnlogged/icons-satifcation/valoriser-128.png';
import iconSolution2 from '../../../../assets/homeUnlogged/icons-satifcation/expertise-128.png';
import iconSolution3 from '../../../../assets/homeUnlogged/icons-satifcation/cycle-128.png';
import iconSolution4 from '../../../../assets/homeUnlogged/icons-satifcation/satisfaction-client-128.png';


class SolutionPro extends React.Component {


    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.title_container}>
                    <Text style={styles.title_light_text}>{this.props.translate("home.SolutionPro.title_1")}</Text>
                    <Text style={styles.title_light_text}>{this.props.translate("home.SolutionPro.title_2")}</Text>
                    <Text style={styles.title_bold_text}>{this.props.translate("home.SolutionPro.title_3")}</Text>
                    <Text style={styles.title_bold_text}>{this.props.translate("home.SolutionPro.title_4")}</Text>
                    <Text style={styles.title_bold_text}>{this.props.translate("home.SolutionPro.title_5")}</Text>
                    <View style={styles.line_separator}></View>
                </View>
                <View style={styles.solutions_bloc_container}>
                    <View style={styles.solution_bloc_container}>
                        <View style={styles.column_left}>
                            <Image style={styles.image_solution} source={iconSolution1} />
                        </View>
                        <View style={styles.column_right}>
                            <Text style={styles.title_bloc_text}>{solutionsData[0].title}</Text>
                            <Text style={styles.subtitle_bloc_text}>{solutionsData[0].description_bloc_1}</Text>
                            <Text style={styles.subtitle_bloc_text}>{solutionsData[0].description_bloc_2}</Text>
                            <Text style={styles.subtitle_bloc_text}>{solutionsData[0].description_bloc_3}</Text>
                     </View>
                    </View>
                </View>
                <View style={styles.solutions_bloc_container}>
                    <View style={styles.solution_bloc_container}>
                        <View style={styles.column_left}>
                            <Image style={styles.image_solution} source={iconSolution2} />
                        </View>
                        <View style={styles.column_right}>
                            <Text style={styles.title_bloc_text}>{solutionsData[1].title}</Text>
                            <Text style={styles.subtitle_bloc_text}>{solutionsData[1].description_bloc_1}</Text>
                     </View>
                    </View>
                </View>
                <View style={styles.solutions_bloc_container}>
                    <View style={styles.solution_bloc_container}>
                        <View style={styles.column_left}>
                            <Image style={styles.image_solution} source={iconSolution3} />
                        </View>
                        <View style={styles.column_right}>
                            <Text style={styles.title_bloc_text}>{solutionsData[2].title}</Text>
                            <Text style={styles.subtitle_bloc_text}>{solutionsData[2].description_bloc_1}</Text>
                     </View>
                    </View>
                </View>
                <View style={styles.solutions_bloc_container}>
                    <View style={styles.solution_bloc_container}>
                        <View style={styles.column_left}>
                            <Image style={styles.image_solution} source={iconSolution4} />
                        </View>
                        <View style={styles.column_right}>
                            <Text style={styles.title_bloc_text}>{solutionsData[3].title}</Text>
                            <Text style={styles.subtitle_bloc_text}>{solutionsData[3].description_bloc_1}</Text>
                     </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#373b3c',
        paddingBottom: 50,
        paddingTop: 50
    },
    title_container: {
      
    },
    title_light_text: {
        marginTop: 0,
        lineHeight: 40,
        fontSize: 36,
        color: 'white',
        backgroundColor: 'transparent',
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 50,
        marginRight: 50,
    },
    title_bold_text: {
        marginTop: 0,
        lineHeight: 40,
        fontSize: 36,
        color: 'white',
        backgroundColor: 'transparent',
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 50,
        marginRight: 50,
    },
    line_separator: {
        width: 100,
        height: 6,
        marginBottom: 60,
        marginTop: 50,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    solutions_bloc_container: {
        flex: 1, 
    },
    solution_bloc_container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row'
    },
    column_left: {
        flex: 1,
    },
    column_right: {
        flex: 3,
        marginBottom: 40
    },
    image_solution: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    title_bloc_text: {
        fontSize: 22,
        marginTop: 40,
        marginRight: 20
    },
    subtitle_bloc_text: {
        fontSize: 16,
        marginTop: 20,
        marginRight: 20
    }
})

export default SolutionPro