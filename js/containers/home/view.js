import React from 'react';
import styles from './styles';
import { ScrollView, View, Text, Image } from 'react-native';
import {Link, LinkWithoutNavigation} from '@core-components';
import TopTitleImage from './components/topTitleImage'
import EvaluationDescription from './components/evaluationDescription'
import EvaluationEmplacement from './components/evaluationEmplacement'
import SolutionPro from './components/solutionsPro'
import EstimationImmo from './components/estimationImmo'
import OffreSolution from './components/offreSolution'
import CarouselMedia from './components/carouselMedia'
import FollowYoutube from './components/followYoutube'
import SocialNetwork from './components/socialNetwork'
import LastNews from './components/lastNews'
import FooterComponent from './components/footerComponent'
import HeaderLogo from './components/headerLogo'
import FlatlistThematics from './components/flatlistThematics'

import left from '../../../assets/left.png';


/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const {translate} = this.props;
    const { drawer } = this.props;
   
    return (

        <View style={[styles.container]}>
            {
                <View> 
                    <ScrollView>  
                        <TopTitleImage translate={translate} />
                        <EvaluationDescription translate={translate}  />
                        <FlatlistThematics translate={translate} />  
                        <EvaluationEmplacement translate={translate} />
                        <SolutionPro translate={translate} />
                        <EstimationImmo translate={translate} />
                        <OffreSolution translate={translate}  />
                        <CarouselMedia translate={translate}  />
                        <FollowYoutube translate={translate}  />
                        <SocialNetwork translate={translate}  />
                        <LastNews translate={translate}  />
                        <FooterComponent translate={translate}  />
                    </ScrollView>
                    <HeaderLogo />
                </View>
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
