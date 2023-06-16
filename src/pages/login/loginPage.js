import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import { StyleSheet } from 'react-native';

export default function Login({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input}
            placeholder="Log-in..."/>
            <TextInput style={styles.input}
            placeholder="Senha..."/>
            <Text style={styles.link}
                onPress={() => navigation.navigate('MudarSenha')}>
                Esqueci minha senha...
            </Text>
            <View style={styles.btnDefault}>
                <Button
                title="Cadastrar"
                color="#009859"
                onPress={() => navigation.navigate("Registro")}/>
            </View>
            <View style={styles.btnDefault}>
                <Button
                title="Entrar"
                color="#009859"
                onPress={() => navigation.navigate("Catalogo")}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input: {
        width: 250,
        marginTop: 40,
        padding: 10,
        fontSize: 18,
        color: 'rgba(0, 152, 89, 0.5)',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#009859'
    },
    link: {
        color: 'blue',

    },
    btnDefault: {
        width: 250,
        marginTop: 40,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ffffff'
    },
  });