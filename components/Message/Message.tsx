import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const blue = '#3777f0'
const grey = 'lightgrey'

const Message = ({ message }) => {

    const myId = 'u11'
    const myMessage = message.user.id === myId

    return (
        <View style={[styles.container, {
            backgroundColor: myMessage ? grey : blue,
            marginLeft: myMessage ? 'auto' : 10,
            marginRight: myMessage ? 10 : 'auto'
            }]}>
            <Text style={{color: myMessage ? 'black' : 'white'}}>{message.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3777f0',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '70%',
    },
    

})

export default Message
