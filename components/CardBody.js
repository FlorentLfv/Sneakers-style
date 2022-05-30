import { StyleSheet, Text, View, Image } from 'react-native';

const CardBody = (props) => {
    const { photo } = props;
    const { title } = props;
    const { desc } = props;
    return (
        <View>
            <Image source={photo} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{desc}</Text>
        </View>
    )
};

export default CardBody;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#588ebc',
        borderRadius: 0,
        marginBottom: 15,
        paddingHorizontal: 0,
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        marginBottom: 15,
        marginLeft: 15,
    },
    description: {
        fontSize: 15,
        justifyContent: 'center',
        marginBottom: 15,
        marginLeft: 15,
    },
});  