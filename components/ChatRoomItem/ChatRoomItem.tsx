import React from "react";
import { Text, View, Image, Pressable} from 'react-native'
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";

export default function ChatRoomItem(props) {
  const chatRoom = props.chatRoom

  const user = chatRoom.users[1]

  const navigation = useNavigation()

  const onPress = () => {
      navigation.navigate('ChatRoom', { id: chatRoom.id })
  }

    return (
    <Pressable onPress={onPress} style={styles.container}>
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
    </Pressable>)
}







