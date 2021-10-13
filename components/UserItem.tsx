import React from "react";
import { Text, View, Image, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/core";


export default function ChatRoomItem({ user }) {

  const navigation = useNavigation()

  const onPress = () => {
      
  }

    return (
    <Pressable onPress={onPress} style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />

        <View style={styles.rightContainer}>
            <View style={styles.upperRow}>
            <Text style={styles.name}>{user.name}</Text>
        </View>
        </View>
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