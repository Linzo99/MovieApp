import React, {useRef, useEffect, useState} from 'react'
import { getImage } from '../lib/api/index'
import {Text, Dimensions, StyleSheet, View, ImageBackground, Animated} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { renderThird } from '../components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import IconBut from '../components/Icon'
import Button from '../components/Button'

const {width, height} = Dimensions.get('window')

function Detail(){
    const scroll = useRef(new Animated.Value(0)).current; 
    const {params:{ item }} = useRoute()

    return(
        <>
        { renderThird(item) }
        <Animated.ScrollView
            onScroll={Animated.event(
               [{ nativeEvent:{ contentOffset:{ y:scroll }}}],
               { useNativeDriver:false } 
            )}
            showsVerticalScrollIndicator={false}
            style={{flex:1, display:'flex', backgroundColor:'#1F1F20'}}
        >
            <Animated.View style={{height:height*0.8, width}}>
               <ImageBackground source={{uri:getImage(item.backdrop_path, 1280)}} style={{flex:1, width:undefined, height:undefined}}/> 
            </Animated.View>
            
            <Animated.View style={[styles.infoContainer]}>

                <View style={styles.buttons}>
                    <IconBut>
                        <Icon name="play" size={40} color='white'/>
                    </IconBut>
                    <IconBut>
                        <Icon name="ios-cloud-download" size={40} color='white'/>
                    </IconBut>
                </View>

                <View style={styles.otherBut}>
                    <Button text="REVIEW"/>
                    <Button text="TRAILER"/>
                </View>

                <Text numberOfLines={7} style={styles.overview}>{item.overview}</Text>

            </Animated.View>

        </Animated.ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    infoContainer:{
        paddingHorizontal: 20,
        position:'relative',
        backgroundColor:'#1F1F20',
        paddingBottom: 5,
    },
    buttons:{
        width:140,
        display:'flex',
        top:-35,
        right:-10,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    otherBut:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:200,
        top:-20,
    },
    overview:{
        color:'white'
    }
    
})

export default Detail
