import { Button, SafeAreaView, TextInput, View } from "react-native";
import { StyleSheet } from 'react-native';

export default function CadastrarUsuario({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input}
            placeholder="Log-in..."/>
            <TextInput style={styles.input}
            placeholder="Senha..."/>
            <TextInput style={styles.input}
            placeholder="Confirmar senha..."/>
            <View style={styles.btnDefault}>
                <Button
                title="Registrar-se"
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
    btnDefault: {
        width: 250,
        marginTop: 40,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ffffff'
    },
  });