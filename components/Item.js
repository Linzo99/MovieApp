import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ImageBackground, Text} from 'react-native';
import {getImage} from '../lib/api/index'
import { useNavigation } from '@react-navigation/native'

const Item = ({ item }) => {
    const navigation = useNavigation()

    const getDate = () => {
        if(item.release_date) return  String(item?.release_date).split('-')[0]
    }
        
    return(
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('detail',{item})}>
            <View style={styles.item}>
                <ImageBackground source={{uri:getImage(item.poster_path, 200)}} style={styles.img}>
                    <View style={styles.info}>
                        <Text style={styles.text}>{item.vote_average}</Text>
                        <Text style={styles.text}>{getDate()}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
        )
    };

const styles = StyleSheet.create({
    item:{
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    img:{
        width: 120, 
        height: 180,
        position:'relative' 
    },
    info:{
        width: '100%', 
        paddingHorizontal: 4,
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position:'absolute',
        bottom: 0,
    },
    text:{
        color: 'gray',
        fontWeight:'200',
        fontSize: 12 
    }
})
export default Item;