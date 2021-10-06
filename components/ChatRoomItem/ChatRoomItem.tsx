import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native'
import styles from "./styles";

export default function ChatRoomItem(props) {
  const chatRoom = props.chatRoom

  const user = chatRoom.users[1]

    return (
    <View style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />

        {/* message counter badge */}
        {chatRoom.newMessages ? <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View> : null}

        <View style={styles.rightContainer}>
            <View style={styles.upperRow}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
            </View>
            {/* message content */}
            <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
        </View>
    </View>)
}







