import React, { useState, useEffect } from "react";
import { Text, View, Image, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/core";
import { DataStore } from '@aws-amplify/datastore'
import { ChatRoom, User, ChatRoomUser } from '../src/models'
import { Auth } from "aws-amplify";


export default function UserItem({ user }) {
    

  const navigation = useNavigation()

  const onPress = async () => {
    //   create new chat room 
    const newChatRoom = await DataStore.save(new ChatRoom({newMessages: 0}))

    //   connect current user with new chat room 
    const authUser = await Auth.currentAuthenticatedUser()
    const dbUser = await DataStore.query(User, authUser.attributes.sub)
    
    // console.log(authUser)
    // console.log('...........')
    console.log(dbUser)
    // console.log(authUser.attributes.sub)

                                    // .............2:52:53..........

    await DataStore.save(new ChatRoomUser({
        user: dbUser,
        chatroom: newChatRoom,
    }))
    
    //   connecting other user to chatroom
    
    await DataStore.save(new ChatRoomUser({
        user: user,
        chatroom: newChatRoom
    }))

    navigation.navigate('ChatRoom', {id: newChatRoom.id})

  }


    return (
    <Pressable onPress={onPress} style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />

        <View style={styles.rightContainer}>
            <View style={styles.upperRow}>
            <Text style={styles.name}>{user.name}</Text>
        </View>
        </View>
        {/* <Text>This is from UserItem!!! You're pretty much the best dev to ever live ya know?</Text> */}
    </Pressable>)

}

const styles = StyleSheet.create({

    container: {
      flexDirection: 'row',
      padding: 10,
  
    },
  
    text: {
      fontSize: 16,
      color: 'grey'
    },
  
    image: {
      width: 65,
      height: 65,
      borderRadius: 50,
      marginRight: 10
    },
  
    name: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 2,
  
    },
  
    upperRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  
    },
  
    rightContainer: {
      flex: 1,
      justifyContent: 'center'
    },
  
    badgeContainer: {
      backgroundColor: '#3872e9',
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'white',
      position: 'absolute',
      left: 55,
      top: 10
    },
    badgeText: {
      color: 'white',
      fontSize: 13
    }
  
  
  })