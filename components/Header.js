import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import EntyIcon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { toggle } from '../reducers/favorites'

const renderThird = (item) => {
    const navigation = useNavigation()
    const favorites = useSelector( state => state.favorites)
    const dispatch = useDispatch()

    const getLikeColor = () => {
        let ind = favorites.findIndex( ele => ele.id === item.id )
        return ind === -1 ? 'white' : 'red'
    }

    return (
        <View style={styles.headerThird}>
            <Icon onPress={()=>navigation.goBack()} name="arrowleft" size={25} fontSize={12} color="white"/>
            <View style={styles.icon}>
                <MaterialIcon name="share" size={25} color="white"/>
                <MaterialIcon onPress={ () =>  dispatch(toggle(item)) } name="favorite" size={25} color={getLikeColor()}/>
            </View>
        </View>
    )
}



const Header = () => {
    const [search, setSearch] = useState(null)
    return(
        <View style={styles.header}>
            {search===null ? 
                <Text style={styles.headerText}>SENMOVIE</Text>
                :
                <>
                    <EntyIcon onPress={()=>setSearch(null)} name="cross" size={25} fontSize={12} color="white"/>
                    <TextInput placeholder="Search" placeholderTextColor="white" style={styles.textInput} onChange={text=>setSearch(text)} autoFocus/>
                </>
            }
            <Icon onPress={()=>setSearch('')} name="search1" backgroundColor='transparent' size={20} color="white"/>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%', 
        height: 56,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,.1)',
    },
    headerThird:{
        width: '100%', 
        height: 74,
        position:'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor:'rgba(0,0,0,0.1)',
        paddingHorizontal: 10,
        paddingBottom:5,
        zIndex: 10,
    },
    headerText:{
        color:'rgba(255,0,0,.7)',
        fontSize: 20, 
        fontWeight: 'bold',
        textShadowColor: 'white',
        textShadowOffset:{widht:4, height:2},
        textShadowRadius: 5
    },
    textInput:{
        flex:1,
        color: 'white',
        height:45,
        marginHorizontal: 15,
        padding:0,
        fontSize: 18,
    },
    icon:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:70}
})

export default Header
export { renderThird }