import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import ListItem from '../components/ListItem'
import Header from '../components/Header'

function Favorite(){
    const favorites = useSelector( state => state.favorites )
    const dispatch = useDispatch()
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <Text style={styles.sectionTitle}>My Favorites</Text>
            <ListItem items={favorites}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#1F1F20'
    },
    sectionTitle:{
        marginLeft: 10,
        marginBottom: 10,
        fontSize:18,
        color: 'white'
    },
})
export default Favorite;
