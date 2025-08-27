import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
    <KeyboardAwareScrollView>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      <TextInput style={{width:300,height:60,borderWidth:1,marginVertical:10}}/>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})