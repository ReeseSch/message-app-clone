import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native'
import styles from "./styles";

export default function ChatRoomItem() {
    return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.image} />
        {/* message counter badge */}
        <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>1</Text>
        </View>
        <View style={styles.rightContainer}>
            <View style={styles.upperRow}>
            <Text style={styles.name}>Ol' Musky</Text>
            <Text style={styles.text}>12:00 PM</Text>
            </View>
            {/* message content */}
            <Text numberOfLines={1} style={styles.text}>Bro, let's go colonize Mars!</Text>
        </View>
    </View>)
}







