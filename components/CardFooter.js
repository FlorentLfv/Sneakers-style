import { Text, View, StyleSheet } from 'react-native';
import LikeBtn from './LikeBtn';

const CardFooter = (props) => {
    const { size } = props;
    const { likes } = props;
    return (
        <View style={styles.row}>
            <Text style={styles.sizeText}>{size}</Text>
            <LikeBtn likes={likes}></LikeBtn>
        </View>
    )
};

export default CardFooter;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sizeText: {
        fontSize: 17,
        color: 'grey',
        marginLeft: 15,
    }
});