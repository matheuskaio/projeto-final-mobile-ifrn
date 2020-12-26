import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'


import styles from './styles'

export default function ListaPonto ({ponto}) {
  
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{ponto.dia}</Text>
          <Text style={styles.subject}>Hora de entrada: {ponto.timeInicio}h</Text>
          <Text style={styles.subject}>Hora de saída: {ponto.timeFim}h</Text>
          <Text style={styles.subject}>Total de horas trabalhada: {parseInt(ponto.timeFim) - parseInt(ponto.timeInicio)}h</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Descrição
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preco/hora {'   '}
          <Text style={styles.priceValue}>R$ {parseFloat(ponto.valorHora)}</Text>
        </Text>
      </View>
    </View>
  )

}
