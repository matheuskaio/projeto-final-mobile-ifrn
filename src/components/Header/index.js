import React, { ReactNode } from 'react'
import { View, Text, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function PageHeader ({ title, headerRight, children }) {

  const navigation = useNavigation();


  function handleGoBack() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>)
}