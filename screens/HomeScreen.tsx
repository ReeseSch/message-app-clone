import * as React from 'react';

import { Text, StyleSheet, View, Image, FlatList, Pressable } from 'react-native'
import { Auth } from 'aws-amplify'
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem';

import chatRoomsData from '../assets/dummy-data/ChatRooms'


export default function HomeScreen(){

  const getCurrentUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser()
    console.log(authUser)
  }
  getCurrentUser()

  return (
    <View style={styles.page}>
      <FlatList data={chatRoomsData} renderItem={({ item }) => <ChatRoomItem chatRoom={item} />} />

      <Pressable>
        <Text>Logout</Text>
      </Pressable>
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

