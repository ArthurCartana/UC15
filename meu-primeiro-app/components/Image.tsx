import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

interface ImgProp {
    image: string
}

const Imagem = ({image}: ImgProp) => {
  return (
    <View>
    <Image source={{uri: image}} style={styles.image}/>
    </View>
  )
}

export default Imagem

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 150
    },
})