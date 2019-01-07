import React from 'react'
import styles from './styles'
import { View, Image, ScrollView, Text } from 'react-native'
import { Input, Link, Form, ImagePicker } from '@core-components'
import back from '../../../assets/back-pink.png'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {Environment} from '../../config'
import { MapView } from 'expo';

var view = function () {
    const {region} = this.state;
    return (
        <View style={[styles.container]}>
            <View style={[styles.backBtn]}>
                <Link link="home">
                    <View style={[styles.backLink]}>
                        <Image source={back}
                               style={[styles.backIcon]}/>
                    </View>
                </Link>
            </View>
            <ScrollView>
                <View style={[styles.content]}>
                    <View style={[styles.map]}>
                        <GooglePlacesAutocomplete
                            placeholder='Saississez une adresse'
                            minLength={2} // minimum length of text to search
                            autoFocus={false}
                            returnKeyType={'out'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                            listViewDisplayed='auto'    // true/false/undefined
                            fetchDetails={true}
                            renderDescription={row => row.description} // custom description render
                            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                console.log(data, details)
                                const {geometry} = details;
                                this.setState({
                                    region : {
                                        ...this.state.region,
                                        latitude : geometry.location.lat,
                                        longitude : geometry.location.lng,
                                    }
                                })
                            }}

                            getDefaultValue={() => ''}

                            query={{
                                // available options: https://developers.google.com/places/web-service/autocomplete
                                key: Environment.GOOGLE_PLACES_KEY,
                                language: 'fr', // language of the results
                                types: '(cities)' // default: 'geocode'
                            }}

                            styles={{
                                textInputContainer: {
                                    width: '100%',
                                    backgroundColor:'#f3f3f3'
                                },
                                description: {
                                    fontWeight: 'bold'
                                },
                                predefinedPlacesDescription: {
                                    color: '#1faadb'
                                }
                            }}

                            currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                            currentLocationLabel="Current location"
                            nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                            GoogleReverseGeocodingQuery={{
                                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                            }}
                            GooglePlacesSearchQuery={{
                                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                                rankby: 'distance',
                                types: 'food'
                            }}

                            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                            predefinedPlaces={[]}

                            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                            renderLeftButton={null}
                            renderRightButton={null}
                        />
                        <MapView
                            style={[styles.mapView]}
                            initialRegion={region}
                            region = {region}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
module.exports = view
