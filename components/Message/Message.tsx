import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DataStore } from '@aws-amplify/datastore'
import {User} from '../../src/models'
import { Auth } from 'aws-amplify'
import { ActivityIndicator } from 'react-native-paper'

const blue = '#3777f0'
const grey = 'lightgrey'

// const myId = 'u11'
const Message = ({ message }) => {

    const [user, setUser] = useState<User|undefined>()
    const [isMe, setIsMe] = useState<boolean>(false)

    useEffect(() => {
        DataStore.query(User, message.userID).then(setUser)
    }, [])
    useEffect(() => {
        const confirmUser = async () => {
            if (!user) {
                return
            }
            const authUser = await Auth.currentAuthenticatedUser()
            setIsMe(user.id === authUser.attributes.sub)
        }
        confirmUser()
    }, [user])

    // const myMessage = message.user.id === myId
    if (!user) {
        return <ActivityIndicator />
    }

    return (
        <View style={[styles.container, {
            backgroundColor: isMe ? grey : blue,
            marginLeft: isMe ? 'auto' : 10,
            marginRight: isMe ? 10 : 'auto'
        }]}>
            <Text style={{color: isMe ? 'black' : 'white'}}>{message.content}</Text>
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
