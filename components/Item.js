import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ImageBackground, Text} from 'react-native';
import { Dimensions } from 'react-native'
import {getImage} from '../lib/api/index'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

const { width } = Dimensions.get('window')

const Item = ({ item, simple, large }) => {
    const navigation = useNavigation()
    const shadow = { shadowColor:'black', shadowOffset:{width:0,height:0}, shadowRadius:10}
    const containerStyle = {
        marginRight: simple ? .5 : large ? 8 : 5,
        borderRadius: simple ? 0 : large ? 10 : 5,
        width: large ? width*.95 : 120, 
        height: large ? 200 : 180,
        overflow: 'hidden',
    }
    const getDate = () => {
        const release_date = item.release_date||item.first_air_date
        if(release_date) return  String(release_date).split('-')[0]
    }
    const getTitle = () => (item.title||item.original_titl||item.name||item.original_name) 
        
    return(
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('detail',{item})}>
            <View style={containerStyle}>
                <ImageBackground source={{uri:getImage(item.backdrop_path, large?780:500 )}} style={StyleSheet.absoluteFillObject}>
                    <LinearGradient start={{x:0, y:.7}} colors={['transparent', 'rgba(0,0,0,.6)']} style={StyleSheet.absoluteFill}/>
                </ImageBackground>
                <View style={styles.infoContainer}>
                    { large && <Text style={[styles.text,{fontSize:15}]}>{ getTitle() }</Text> }
                    <View style={styles.info}>
                        <Text style={styles.text}>{item.vote_average}</Text>
                        <Text style={styles.text}>{getDate()}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        )
    };

const styles = StyleSheet.create({
    infoContainer:{
        width: '100%', 
        paddingHorizontal: 5,
        paddingVertical: 1,
        position:'absolute',
        bottom: 0,
    },
    info:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text:{
        color: 'rgba(255, 255, 255, .7)',
        fontWeight:'200',
        fontSize: 12,
        fontWeight:'bold',
    }
})
export default Item;