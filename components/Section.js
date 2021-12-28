import React,{useEffect, useState} from 'react';
import Item from './Item'
import { useInfiniteQuery } from 'react-query'
import { Text, View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import { flattenQueryData } from '../helpers'

const Section = ({item:section}) => {
    const { title, get, paging } = section
    const { data, isLoading, fetchNextPage} = useInfiniteQuery(title, get, {
        getNextPageParam: lastPage => {
            const { page, total_pages} = lastPage
            return page < total_pages ? page+1 : undefined
        }
    })


    return(
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {isLoading  ?
                    <View style={styles.actContainer}>
                        <ActivityIndicator/>
                    </View> 
                    :
                    <FlatList
                        data={flattenQueryData(data)}
                        renderItem={({item}) => <Item item={item} large={section.large}/> }
                        keyExtractor={(item, i)=>i.toString()}
                        horizontal
                        pagingEnabled={paging}
                        decelerationRate={0}
                        bounces={false}
                        onEndReached={ () => fetchNextPage()}
                        showsHorizontalScrollIndicator={false}
                        onEndReachedThreshold={0.5}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        paddingLeft: 10,
        marginBottom: 10,
    },
    sectionTitle:{
        marginLeft: 2,
        marginBottom: 10,
        fontSize:16,
        color: 'white'
    },
    actContainer:{
        height:180,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Section;
