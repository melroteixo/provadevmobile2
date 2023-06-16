import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        margin: 2,
        backgroundColor: '#fff',
    },
    campoImagem: {
        width: '30%',
        height: '100%'
    },
    imagem: {
        height: '100%',
        width: '100%',
        paddingRadius: 10,
    },
    infoItem: {
        width: '70%',
        padding: 10,
        borderRadius: 10,
        justifyContent: "space-between"
    },
    nomeItem: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    descItem: {
        margin: 5,
    },
    btnDefault: {
        width: 250,
        marginTop: 40,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ffffff'
    },
});

export default styles;
