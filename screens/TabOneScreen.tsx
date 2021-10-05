import * as React from 'react';

import { Text, StyleSheet, View, Image } from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem';

import chatRoomsData from '../assets/dummy-data/ChatRooms'


const chatRoom1 = chatRoomsData[0]
const chatRoom2 = chatRoomsData[2]


export default function TabOneScreen(){
  return (
    <View style={styles.page}>
      <ChatRoomItem chatRoom={chatRoom1} />
      <ChatRoomItem chatRoom={chatRoom2} />
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

