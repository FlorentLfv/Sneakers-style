import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/FontAwesome5';

const LikeBtn = (props) => {
    const { likes } = props;
    return (
        // <Button icon="heart" mode="outlined" color='#2799fa' style={styles.buttonStyle} contentStyle={styles.buttonContent} onPress={() => console.log('Pressed')}>{likes}</Button>
        <View style={styles.row}>
            <IconButton
                icon="heart"
                color='#2799fa'
                size={25}
                style={styles.buttonStyle}
                onPress={() => console.log('Pressed')}
            />
            <Text style={styles.likeNumber}>{likes}</Text>
        </View>
    )
};

export default LikeBtn;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    buttonStyle: {
        margin: 0,
    },
    likeNumber: {
        fontSize: 20,
        color: '#2799fa',
    }
});