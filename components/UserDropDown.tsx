import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { Menu, Provider } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'


export default function UserDropDown() {

    const [showMenu, setShowMenu] = React.useState(false)

    return (
        <Provider>
            <View style={styles.menu}>
                <Menu
                    visible={showMenu}
                    onDismiss={() => setShowMenu(false)}
                    anchor={
                        <Pressable onPress={() => {setShowMenu(true)}}>
                            <FontAwesome name="user-circle-o" size={28} color="grey" />
                        </Pressable>
                    }
                >
                    <Menu.Item onPress={() => {}} title="Look it works!!!" />
                    <Menu.Item onPress={() => {}} title="Go You!!!" />

                </Menu>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    menu: {
        
    }
})






