import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoadingComponent from '../elements/LoadingComponent'

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <LoadingComponent/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
})