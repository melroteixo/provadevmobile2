import { StyleSheet, View } from 'react-native';
import Card from "../../components/cardCompra";

export default function Catalogo(){
    const Itens = [
        {
            nome: 'Mjolnir',
            desc: 'Mjolnir, um martelo lendário usado pelo filho de Odin, Thor. Muitos temem seu poder e peso imensurável, dizem que só os digos conseguem erguê-lo. Com raios e trovões, o portador desse martelo de guerra põe medo no coração dos inimigos!',
            uri: 'https://i.redd.it/pk54k1wm49b81.jpg',
        },
        {
            nome: 'Ampulheta de Zhonya',
            desc: 'Uma ampulheta mágica usada pela bruxa Zhonya, quem toca sua estrutura de vidro sente o controle do próprio tempo nas mãos. Com ela o usuário pode entrar em estado de êxtase e se congelar no tempo, ficando completamente intocável e imutável.',
            uri: 'https://wiki.runarcana.org/images/thumb/3/31/Zhonya%27s_Hourglass_item_HD.png/150px-Zhonya%27s_Hourglass_item_HD.png',
        },
        {
            nome: 'Ocarina do Tempo',
            desc: 'A ocarina usada por um herói do passado, para salvar a princesa Zelda. Com uma sequência certa de notas, essa ocarina pode abrir caminhos, adormecer inimigos e fugir de lutas. Nas mãos de um bardo, ela pode ser usada para fortalecer aliados e dar desvantagens aos inimigos.',
            uri: 'https://pm1.narvii.com/6477/27f8af79b7c7b5202459cd54fba92d9507f05079_00.jpg',
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
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  });