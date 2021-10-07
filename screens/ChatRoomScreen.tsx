import React from "react";
import {Text, StyleSheet, FlatList, SafeAreaView} from 'react-native'
import { View } from "../components/Themed";
import Message from "../components/Message/Message";
import chatRoomData from '../assets/dummy-data/Chats'
import MessageInput from "../components/MessageInput/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/core";


export default function ChatRoomScreen() {

    const route = useRoute()
    const navigation = useNavigation()

    console.warn(`Displaying chat for ${route.params?.id}`)

    navigation.setOptions({ title: `Ol' Musky`})

    return(
       <SafeAreaView style={styles.page}>
           <FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <Message message={item} />}
           
           />
           <MessageInput />
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }


})







