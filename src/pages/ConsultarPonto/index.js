import React, { useState } from 'react'
import { View, ScrollView, TextInput, Text } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import * as firebase from 'firebase';
import PageHeader from '../../components/Header';
import ListaPonto from '../../components/ListaPonto';


import styles from './styles';

function TeacherList() {

  var firebaseConfig = {
    apiKey: "AIzaSyCyBAGPjn2FwyXQ9WujYZmK-qIP3ULtSlo",
    authDomain: "projeto-final-c8a5c.firebaseapp.com",
    databaseURL: "https://projeto-final-c8a5c-default-rtdb.firebaseio.com",
    projectId: "projeto-final-c8a5c",
    storageBucket: "projeto-final-c8a5c.appspot.com",
    messagingSenderId: "245527331524",
    appId: "1:245527331524:web:fe732dc18cda914c00bf91"
  };

  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
  // firebase.initializeApp(firebaseConfig);

  const [matricula, setMatricula] = useState('')
  const [meusPontos, setMeusPontos] = useState([])
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);


  async function handleFiltersSubmit() {
    await firebase.database().ref(`ponto/${matricula}`).on("value", (response) => {
      const pontos = []
      response.forEach((item) => {
        
        const ponto = {
          key: item.key,
          dia: item.val().data,
          timeInicio: item.val().timeInicio,
          timeFim: item.val().timeFim,
          valorHora: item.val().valorHora
        }
        pontos.push(ponto)
      })
      setMeusPontos(pontos)
      setIsFiltersVisible(false);

    })

    // alert(meusPontos[0].dia)
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader title='Meus ponto cadastrados' headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name='filter' size={20} color='#FFF' />
        </BorderlessButton>
      )}>

        {isFiltersVisible && (
          <View style={styles.searchForm}>
            {/* <Text > Registrar Ponto </Text> */}
            <View style={styles.searchForm} >
              <Text style={styles.label} > Matricula </Text>
              <TextInput value={matricula}
                onChangeText={text => setMatricula(text)}
                style={styles.input}
                placeholderTextColor="#c1dbcc"
                placeholder="Qual matricula" />
            </View>
            <RectButton onPress={handleFiltersSubmit}
              style={styles.submitButton} >
              <Text style={styles.submitButtonText} > Buscar </Text>
            </RectButton >
          </View>
        )}
      </PageHeader>
      {/* <Text > Registrar Ponto </Text>
      <View style={styles.searchForm} >
        <Text style={styles.label} > Matricula </Text>
        <TextInput value={matricula}
          onChangeText={text => setMatricula(text)}
          style={styles.input}
          placeholderTextColor="#c1dbcc"
          placeholder="Qual matricula" />
      </View>
      <RectButton onPress={handleFiltersSubmit}
        style={styles.submitButton} > */}
      { /* <Feather name='search' size={20} color='#FFF' style={{marginRight: 10}}/> */}
      {/* <Text style={styles.submitButtonText} > Buscar </Text>
      </RectButton > */}

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {meusPontos.map(ponto => {
          return (
            <ListaPonto
              key={ponto.key}
              ponto={ponto}
            />)
        })}

      </ScrollView>
    </View >
  )
}

export default TeacherList