import React from 'react'
import { View, Text, } from 'react-native'


import styles from './styles'

export default function ListaPonto({ ponto }) {

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
      <Text style={styles.bio}>{ponto.descricao}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preco/hora {'   '}
          <Text style={styles.priceValue}>R$ {parseFloat(ponto.valorHora).toFixed(2)}</Text>
          {' --  '}
          Totalizando:
          {'   '}
          <Text style={styles.priceValue}>R$ {((parseInt(ponto.timeFim) - parseInt(ponto.timeInicio)) * parseFloat(ponto.valorHora)).toFixed(2)}</Text>
        </Text>
      </View>
    </View>
  )

}
