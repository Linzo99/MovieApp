import React, { useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView, View, StyleSheet, Dimensions, FlatList, TouchableWithoutFeedback, ActivityIndicator} from 'react-native';
import { useInfiniteQuery } from 'react-query'
import { tvGenre } from '../lib/constants'
import Header from '../components/Header'
import ListItem from '../components/ListItem'
import { getTVByGenre } from '../lib/api/index'
import { flattenQueryData } from '../helpers'

const { width } = Dimensions.get('window')

const Item = ({ item, setGenre})=>(
    <TouchableWithoutFeedback onPress={()=>setGenre(item.id)}>
        <View style={styles.genre}>
            <Text style={{color:'white', fontSize:14}}>{item.name}</Text>
        </View>
    </TouchableWithoutFeedback>
)

export default function TV(){
    const [genre, setGenre] = useState(10759)
    const { data, isLoading, fetchNextPage} = useInfiniteQuery(['movieGender', genre], getTVByGenre, {
            getNextPageParam: lastPage => {
                const { page, total_pages} = lastPage
                return page < total_pages ? page+1 : undefined
            }
        })

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#1F1F20'}}> 
            <Header/>
            <View style={{height:40}}>
                <FlatList
                    data={tvGenre.genres}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({ item }) => <Item item={item} setGenre={setGenre}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            {isLoading ? 
                     <ActivityIndicator style={{flex:1}}/>
                     :
                    <ListItem items={flattenQueryData(data)} getNext={fetchNextPage}/> 
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    genre:{
        height:30,
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: '#424242',
        marginRight: 7,
        borderRadius: 30,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
