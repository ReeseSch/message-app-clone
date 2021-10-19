import React, { useState, useEffect } from "react";
import { Text, View, Image, Pressable, ActivityIndicator} from 'react-native'
import { useNavigation } from "@react-navigation/core";
import { DataStore } from '@aws-amplify/datastore'
import {ChatRoomUser, User} from '../../src/models'
import styles from "./styles";
import { Auth } from "aws-amplify";

export default function ChatRoomItem(props) {
  const chatRoom = props.chatRoom

  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<User|null>(null)
  //   const user = chatRoom.users[1]


  const navigation = useNavigation()

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = (await DataStore.query(ChatRoomUser))
            .filter(chatRoomUser => chatRoomUser.chatroom.id === chatRoom.id)
            .map(chatRoomUser => chatRoomUser.user)

        setUsers(fetchedUsers)    
        const authUser = await Auth.currentAuthenticatedUser()
        setUser(fetchedUsers.find(user => user.id !== authUser.attributes.sub) || null)
        }
        fetchUsers()
    }, [])

  const onPress = () => {
      navigation.navigate('ChatRoom', { id: chatRoom.id })
  }

  if (!user) {
      return <ActivityIndicator />
  }

    return (
    <Pressable onPress={onPress} style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />

        {/* message counter badge */}
        {!!chatRoom.newMessages ? <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View> : null}

        <View style={styles.rightContainer}>
            <View style={styles.upperRow}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>{chatRoom.lastMessage?.createdAt}</Text>
            </View>
            {/* message content */}
            <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage?.content}</Text>
        </View>
    </Pressable>)
}







