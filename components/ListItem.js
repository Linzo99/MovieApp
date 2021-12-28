import React from 'react';
import { ImageBackground, View, StyleSheet, TouchableWithoutFeedback, FlatList, Text} from 'react-native';
import { getImage } from '../lib/api/index'
import { useNavigation } from '@react-navigation/native'
import Item from './Item'

const renderItem = ( {item} ) => {
    const navigation = useNavigation()
    const getDate = () => {
        if(item.release_date) return  String(item?.release_date).split('-')[0]
    }
    return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate('detail', {item})}>
        <View style={{ marginRight:1, marginBottom:1, height:180}}>
            <ImageBackground style={{flex:1, width:'100%', height:'100%'}} source={{uri:getImage(item.poster_path, 200)}}>
                <View style={styles.info}>
                    <Text style={styles.text}>{item.vote_average}</Text>
                    <Text style={styles.text}>{getDate()}</Text>
                </View>
            </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
    )
}

const ListItem = ({ items, getNext}) => {
    return(
            <FlatList
                data={items}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({ item }) => <Item item={item} simple/> }
                onEndReached={()=> getNext && getNext()}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                scrollEventThrottle={1000}
                numColumns={3}
                key={':)'}
            />
        ) 
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
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

export default ListItem;