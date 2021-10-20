import React, {useState, useEffect} from "react";
import {Text, StyleSheet, FlatList, SafeAreaView} from 'react-native'
import { View } from "../components/Themed";
import Message from "../components/Message/Message";
// import chatRoomData from '../assets/dummy-data/Chats'
import MessageInput from "../components/MessageInput/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/core";
import { DataStore } from '@aws-amplify/datastore'
import { SortDirection } from 'aws-amplify'
import { Message as MessageModel, ChatRoom } from '../src/models'
import { ActivityIndicator } from "react-native-paper";



export default function ChatRoomScreen() {
    const [messages, setMessages] = useState<MessageModel[]>([])
    const [chatRoom, setChatRoom] = useState<ChatRoom|null>(null)


    const route = useRoute()
    const navigation = useNavigation()


    useEffect(() => {
        fetchChatRoom()
    }, [])

    useEffect(() => {
        
        fetchMessages()
    }, [chatRoom])

    useEffect(() => {
        const subscription = DataStore.observe(MessageModel).subscribe(msg => {
            console.log(msg.model, msg.opType, msg.element)
            if (msg.model === MessageModel && msg.opType === 'INSERT') {
                setMessages(existingMessage => [ msg.element, ...existingMessage])
            }
        })

        return () => subscription.unsubscribe()
    }, [])



    const fetchChatRoom = async () => {
        if(!route.params?.id) {

            return
        }
        const chatRoom = await DataStore.query(ChatRoom, route.params.id)
        if (!chatRoom) {
            console.error('Could not find chat room')
        } else {
            setChatRoom(chatRoom)
        }
        // const fetchedMessages = await DataStore.query(MessageModel, )
    }

    const fetchMessages = async () => {
        if(!chatRoom) {
            return
        } 
        const fetchedMessages = await DataStore.query(MessageModel, message => message.chatroomID("eq", chatRoom?.id), {
            sort: message => message.createdAt(SortDirection.ASCENDING)
        })
        // console.log(fetchedMessages)
        setMessages(fetchedMessages)
    }
    
    // console.warn(`Displaying chat for ${route.params?.id}`)

    navigation.setOptions({ title: `Ol' Musky`})

    if (!chatRoom) {
        return <ActivityIndicator />
    }

    return(
       <SafeAreaView style={styles.page}>
           <FlatList
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
           
           />
           <MessageInput chatRoom={chatRoom} />
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }


})







