import React, { useState, useEffect } from 'react';

import { Text, StyleSheet, View, Image, FlatList, Pressable } from 'react-native'
import { Auth, DataStore } from 'aws-amplify'
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem';
import { ChatRoom, ChatRoomUser } from '../src/models'

import chatRoomsData from '../assets/dummy-data/ChatRooms'


export default function HomeScreen(){
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([])

  useEffect(() => {
    const fetchChatRooms = async () => {
      const userData = await Auth.currentAuthenticatedUser()

      const chatRooms = (await DataStore.query(ChatRoomUser)).filter(chatRoomUser => chatRoomUser.user.id === userData.attributes.sub).map(chatRoomUser => chatRoomUser.chatroom)
      // console.log(chatRooms)
      setChatRooms(chatRooms)
    }
    fetchChatRooms()
  }, [])



  const getCurrentUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser()
    console.log(authUser)
  }
  getCurrentUser()

  return (
    <View style={styles.page}>
       <FlatList data={chatRooms} renderItem={({ item }) => <ChatRoomItem chatRoom={item} />} />
    </View>
    
  );
}


const styles = StyleSheet.create({

  page: {
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: 'lightgrey'
  },
})

