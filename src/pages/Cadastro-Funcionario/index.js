import React,{useState, useEffect} from 'react';
import config from '../../../config/config';
import {View, Text, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { css } from '../../../assets/css/css';


export default function CadastroFuncionario(){

    const [nome, setUsuario] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [mensagem, setMensagem] = useState(null);

    //Função que enviar os dados do formulário para o backend
    async  function  registrarFuncionario(){

        let request = await fetch(config.urlRootNode+'createFuncionario',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeFuncionario: nome,
                telefoneFuncionario: telefone,
            })
        });

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