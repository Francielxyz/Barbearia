import React,{useState, useEffect} from 'react';
import {View, Text, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { css } from '../../../assets/css/css';
import api from '../../services/api'


export default function CadastroFuncionario(){

    const [nome, setUsuario] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [mensagem, setMensagem] = useState(null);

    useEffect(() => {
        api.post("salvarFuncionario",{
            nomeFuncionario: nome,
            telefoneFuncionario: telefone,
        }).then((response) => setUser(response.data))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro" + err);
            });
    }, []);

    //Função que chama api para salvar um funcionário
    async  function  registrarFuncionario(){

        let request = await fetch(api + 'salvarFuncionario',{
            method: 'POST',
            headers:{
                "Accept": 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeFuncionario: nome,
                telefoneFuncionario: telefone,
            })
        });
        console.log(request);

        let resposta = await request.json();
        setMensagem(resposta);
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={css.container}>

                <View style={css.footer}>
                    {mensagem && (
                        <Text>{mensagem}</Text>
                    )}

                    <TextInput
                        style={css.input}
                        placeholder="Digite seu nome"
                        onChangeText={(text) => setUsuario(text)}
                    />

                    <TextInput
                        style={css.input}
                        placeholder="Digite seu telefone"
                        onChangeText={(text) => setTelefone(text)}
                    />

                    <TouchableOpacity style={css.button} onPress={registrarFuncionario}>
                        <Text style={css.button__text}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}