import * as React from 'react';

import { StyleSheet, View, FlatList, } from 'react-native'
import UserItem from '../components/UserItem'

import usersData from '../assets/dummy-data/Users'


export default function UsersScreen(){
  return (
    <View style={styles.page}>
      <FlatList data={usersData} renderItem={({ item }) => <UserItem user={item} />} />

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