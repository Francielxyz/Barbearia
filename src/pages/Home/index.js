import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation} from "@react-navigation/native";
import { css } from '../../../assets/css/css'


export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={css.container}>
            {/*<View style={css.header}>*/}
            {/*    <Image style={css.header__img} resizeMode='contain' source={require('../image/barbearia.jpg')}></Image>*/}
            {/*</View>*/}
            <View style={css.footer}>
                <TouchableOpacity
                    style={css.button}
                    onPress={()=>navigation.navigate('CadastroFuncionario')}>
                    <Text style={css.button__text}>Cadastrar Funcionarios</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}