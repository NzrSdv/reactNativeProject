import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddingUserComponent from '../elements/AddingUserComponent'

export default function AddUserScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:600,fontSize:20}}>AddUser</Text>
      <AddingUserComponent navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#E8E8E8'
      },
})