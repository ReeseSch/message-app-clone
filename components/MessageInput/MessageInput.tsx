import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, Platform, KeyboardAvoidingView } from 'react-native'
import { Fontisto, Feather, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import { DataStore }from '@aws-amplify/datastore'
import {Message, ChatRoom} from '../../src/models'
import { Auth } from 'aws-amplify';

export default function MessageInput({ chatRoom }) {
    const [message, setMessage] = useState('')

    const sendMessage = async () => {
        const user = await Auth.currentAuthenticatedUser()
        const newMessage = await DataStore.save(new Message ({
            content: message,
            userID: user.attributes.sub,
            chatroomID: chatRoom.id ,
        }))


        updateLastMessage(newMessage)
        setMessage('')
    }

    const updateLastMessage = async (newMessage) => {
        DataStore.save(ChatRoom.copyOf(chatRoom, updatedChatRoom => {
            updatedChatRoom.LastMessage = newMessage
        }))
    }

    const onPress = () => {
        sendMessage() 
    }

    return (
        <KeyboardAvoidingView style={styles.root} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={100}>
            <View style={styles.inputContainer}>
                <Fontisto name="smiley" size={24} color="grey" style={styles.icon} />

                <TextInput 
                    style={styles.input}
                    value={message}
                    onChangeText={(newMessage) => setMessage(newMessage)}
                    placeholder={'Message...'}
                    />

                <Feather name="camera" size={24} color="grey" style={styles.icon} />
                <SimpleLineIcons name="microphone" size={24} color="grey" style={styles.icon} />
            </View>

            {/* send button */}
            {message ? <Pressable onPress={onPress} style={styles.buttonContainer} >
                <MaterialIcons name="send" size={26} color="white" />
            </Pressable> : null}

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
    },

    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        padding: 10,
    },

    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // buttonText: {
    //     color: 'white',
    //     fontSize: 12,
    // },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },

    icon: {
        marginHorizontal: 5,
    }
})




