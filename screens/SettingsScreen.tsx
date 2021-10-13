import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Auth } from 'aws-amplify'

export default function SettingsScreen() {

    // sign out function
    const logOut = () => {
    Auth.signOut()
    }

    return (
        <View>
            <Pressable style={styles.logOutBtn} onPress={logOut}>
                <Text style={styles.logOutText}>Log Out</Text>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    logOutBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: '10%',
        margin: '5%',
        borderRadius: 40,
    },
    logOutText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
