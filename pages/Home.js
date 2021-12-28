import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import Header from '../components/Header'
import Section from '../components/Section'
import api from '../lib/api/index'

const sources = Object.values(api)

export default function Home(){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#1F1F20'}}> 
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
               { sources.map((item, i ) => (
                   <Section key={i} item={item}/>
               ))} 
            </ScrollView>
        </SafeAreaView>
    );
}