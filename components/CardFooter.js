import { Text, View, StyleSheet } from 'react-native';
import LikeBtn from './LikeBtn';

const CardFooter = (props) => {
    const { size } = props;
    const { likes } = props;
    return (
        <View style={styles.row}>
            <Text style={styles.sizeText}>{size}</Text>
            <LikeBtn likes={likes} ></LikeBtn>
        </View>
    )
};

export default CardFooter;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    likeButton: {
        marginLeft: 50,
    },
    sizeText: {
        fontSize: 17,
        color: 'grey',
        marginTop: 7,
        marginLeft: 15,
    }
});