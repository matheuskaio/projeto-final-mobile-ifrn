import React, { useState, useEffect } from 'react'
import { View, Alert, TextInput, Text } from 'react-native'
import { BorderlessButton, RectButton, } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import * as Location from 'expo-location'
import * as firebase from 'firebase';
import PageHeader from '../../components/Header';


import styles from './styles';


export default function Home() {

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

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [descricao, setDescricao] = useState('')
    const [matricula, setMatricula] = useState('')
    const [valorHora, setValorHora] = useState('')
    const [timeInicio, setTimeInicio] = useState('')
    const [timeFim, setTimeFim] = useState('')

    const [initialPostion, setInitialPosition] = useState([0, 0])

    async function loadPosition() {
        const { status } = await Location.requestPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert('Oooops...', 'Precisamos de sua permissao para obter a localizacao')
            return
        }

        const location = await Location.getCurrentPositionAsync()

        const { latitude, longitude } = location.coords

        setInitialPosition([
            longitude,
            latitude
        ])

    }
    loadPosition()
    function dataAtualFormatada() {
        var data = new Date(),
            dia = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (data.getMonth() + 1).toString(),
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    }

    async function cadastrar() {
        if (matricula.length !== 0 && timeInicio.length !== 0 && timeFim.length !== 0 && valorHora.length !==0) {
            let ponto = firebase.database().ref(`ponto/`).child(matricula)
            let chave = (await ponto.push()).key
            ponto.child(chave).set({
                data: dataAtualFormatada(),
                descricao: descricao,
                latitude: initialPostion[0],
                longitude: initialPostion[1],
                timeInicio: timeInicio,
                timeFim: timeFim,
                valorHora: valorHora
            })
            limparCampos()
        }else{
            alert("Os campos com * são obrigatórios")
        }
    }

    const handleFiltersSubmit = () => Alert.alert("Confirmação",
        `Deseja realmente cadastrar na ${matricula}`,
        [{
            text: "Cancelar",
            style: "cancel"
        },
        {
            text: "Sim",
            onPress: cadastrar,
        }],
    );

    function limparCampos() {
        setMatricula("")
        setTimeInicio("")
        setTimeFim("")
        setValorHora("")
        setDescricao("")
    }
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader title='Cadastrar meu ponto' headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name='plus-square' size={20} color='#FFF' />
                </BorderlessButton>
            )}>

                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <View style={styles.searchForm} >
                            <Text style={styles.label} > Matricula* </Text>
                            <TextInput value={matricula}
                                onChangeText={text => setMatricula(text)}
                                style={styles.input}
                                placeholderTextColor="#c1dbcc"
                                placeholder="Qual matricula" />

                            <View style={styles.inputGroup} >

                                <View style={styles.inputBlock} >
                                    <Text style={styles.label} > Início Jornada* </Text>
                                    <TextInput style={styles.input}
                                        value={timeInicio}
                                        onChangeText={text => setTimeInicio(text)}
                                        placeholderTextColor='#c1dbcc'
                                        placeholder='Que hora começou ?'
                                        maxlength={2}
                                    />
                                </View>

                                <View style={styles.inputBlock} >
                                    <Text style={styles.label} > Fim Jornada*</Text>
                                    <TextInput style={styles.input}
                                        value={timeFim}
                                        onChangeText={text => setTimeFim(text)}
                                        placeholderTextColor='#c1dbcc'
                                        placeholder='Que hora terminou ?'
                                        keyboardType="numeric"
                                        maxLength={2}
                                    />
                                </View>
                            </View >
                            <View style={styles.inputGroup} >

                                <View style={styles.inputBlock} >
                                    <Text style={styles.label} > R$/Hora* </Text>
                                    <TextInput style={styles.input}
                                        value={valorHora}
                                        onChangeText={text => setValorHora(text)}
                                        placeholderTextColor='#c1dbcc'
                                        placeholder='Valor da hora ?'
                                        maxlength={2}
                                    />
                                </View>
                            </View >
                            <Text style={styles.label} > Descricao </Text>
                            <TextInput value={descricao}
                                onChangeText={text => setDescricao(text)}
                                style={styles.input}
                                placeholderTextColor="#c1dbcc"
                                placeholder="Descrição" />
                        </View>

                        <RectButton onPress={handleFiltersSubmit}
                            style={styles.submitButton} >
                            { /* <Feather name='search' size={20} color='#FFF' style={{marginRight: 10}}/> */}
                            <Text style={styles.submitButtonText} > Registrar </Text>
                        </RectButton >
                    </View>
                )}

            </PageHeader>
        </View>
    )
}