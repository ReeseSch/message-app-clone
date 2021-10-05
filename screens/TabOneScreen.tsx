import * as React from 'react';

import { Text, StyleSheet, View, Image } from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem';


export default function TabOneScreen(){
  return (
    <View style={styles.page}>
      <ChatRoomItem />
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

