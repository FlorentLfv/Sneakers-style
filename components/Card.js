import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const CustomCard = (props) => {
    const { price } = props;
    const { photo } = props;
    const { title } = props;
    const { desc } = props;
    const { likes } = props;
    const { size } = props;
    return (
        <View>
            <Card style={styles.cardStyle}>
                <Card.Content style={styles.noPadding}>
                    <CardHeader price={price} ></CardHeader>
                    <CardBody photo={photo} title={title} desc={desc} ></CardBody>
                    <CardFooter likes={likes} size={size} ></CardFooter>
                </Card.Content>
            </Card>
        </View>
    )
};

export default CustomCard;

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth: 2,
        borderColor: '#588ebc',
        borderRadius: 0,
        marginBottom: 15,
        marginHorizontal: 10,
        paddingHorizontal: 0,
      },
    noPadding: {
        paddingHorizontal: 0,
        paddingVertical: 10,
      },
});