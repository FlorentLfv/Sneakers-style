import { Text, StyleSheet } from 'react-native';

const CardHeader = (props) => {
    const { price } = props;
    return(
        <Text style={styles.price}>{price}</Text>
    )
};

export default CardHeader;

const styles = StyleSheet.create({
    price: {
        fontSize: 25,
        color: 'darkgrey',
        textAlign: 'right',
        marginRight: 15,
        marginBottom: 10,
    }
  });