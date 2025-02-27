import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddingUserComponent from '../elements/AddingUserComponent'

export default function AddUserScreen() {
  return (
    <View style={styles.container}>
      <Text>AddUserScreen</Text>
      <AddingUserComponent/>
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