import { StyleSheet, View } from 'react-native';
import Card from "../../components/cardCompra";

export default function Catalogo(){
    const Itens = [
        {
            nome: 'Espada Élfica',
            desc: 'Uma espada forjada pelos elfos',
            uri: 'https://www.crosster.com.br/image/cache/catalog/UC3100%20(2)-1000x1000.jpg',
        },
        {
            nome: 'Varinha de Ouro',
            desc: 'Uma varinha poderosa',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCcTLTjdGfTUyvZS1eQLt_WRWEm-5V8bOJA&usqp=CAU',
        },
        {
            nome: 'Amuleto de Proteção',
            desc: 'Uma varinha poderosa',
            uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblue-phoenix-rpg.fandom.com%2Fpt-br%2Fwiki%2FAmuletos_dos_Oito&psig=AOvVaw1NYxgvuaOmO0LQXEi778y8&ust=1682396157703000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjDjK3Uwf4CFQAAAAAdAAAAABAD',
        },
      ];
    return(
        <View style={styles.container}>
            <Card item={Itens[0]}/>
            <Card item={Itens[1]}/>
            <Card item={Itens[2]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gray',
    },
  });