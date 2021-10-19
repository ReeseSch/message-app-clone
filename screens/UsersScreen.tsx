import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { DataStore } from '@aws-amplify/datastore'

import UserItem from '../components/UserItem'
import {User} from '../src/models'
import usersData from '../assets/dummy-data/Users'


export default function UsersScreen(){
    const [users, setUsers] = useState<User[]>([])
    

    // useEffect(() => {
    //     DataStore.query(User).then(setUsers)
    // })

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await DataStore.query(User)
            setUsers(fetchedUsers)
        }
        fetchUsers()
    }, [])

  return (
      
    <View style={styles.page}>

      <FlatList data={users} renderItem={({ item }) => <UserItem user={item} />} />

    </View>
    
  );
}


const styles = StyleSheet.create({

  page: {
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: 'lightgrey'
  },
})