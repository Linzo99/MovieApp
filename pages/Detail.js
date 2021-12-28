import React, {useRef, useEffect, useState} from 'react'
import { getImage } from '../lib/api/index'
import {Text, Image, Dimensions, StyleSheet, View, ImageBackground, Animated} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { renderThird } from '../components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import IconBut from '../components/Icon'
import Button from '../components/Button'
import { LinearGradient } from 'expo-linear-gradient'

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
               { useNativeDriver:true } 
            )}
            showsVerticalScrollIndicator={false}
            style={{flex:1, display:'flex', backgroundColor:'#1F1F20'}}
        >
            <View style={{height:height*0.8, width}}>
               <Image source={{uri:getImage(item.poster_path, 500)}} style={styles.poster}/> 
               <LinearGradient start={{x:0, y:.7}} colors={['transparent', 'rgba(0,0,0,1)']} style={StyleSheet.absoluteFill}>
                   <View style={styles.info}>
                        <Text style={styles.title}>{ item.title||item.original_titl||item.name||item.original_name }</Text>
                        <Text style={styles.date}>{ item.release_date||item.first_air_date }</Text>
                   </View>
               </LinearGradient>
            </View>
            
            <Animated.View style={[styles.infoContainer, { transform:[{ translateY:scroll.interpolate({
                inputRange:[0, 200],
                outputRange:[0, -100],
                extrapolate:"clamp"
                })}] }]}>

                <View style={styles.buttons}>
                    <IconBut>
                        <Icon name="play" size={30} color='white'/>
                    </IconBut>
                    <IconBut>
                        <Icon name="ios-cloud-download" size={30} color='white'/>
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
        paddingHorizontal: 14,
        position:'relative',
        backgroundColor:'#1F1F20',
        paddingBottom: 5,
        borderColor: 'rgba(255, 255, 255, .1)',
        borderTopWidth: .8
    },
    poster:{
        flex:1,
        width:null,
        height:null,
        resizeMode: "cover",
    },
    buttons:{
        width:110,
        display:'flex',
        top:-25,
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
        color:'rgba(255, 255, 255, .9)'
    },
    title:{
        fontSize:22,
        color:'white',
        fontWeight: 'bold',
        },
    date:{
        color:'rgba(255, 255, 255, .7)',
        fontSize: 14,
    },
    info:{
        position: 'absolute',
        bottom:30,
        paddingLeft: 15,
}
    
})

export default Detail
