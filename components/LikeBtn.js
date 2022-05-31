import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

const LikeBtn = (props) => {
    const { likes } = props;

    const [likesCount, setlikesCount] = useState(Number(likes))
    const [liked, setLiked] = useState(false);
    
    const incrementCounter = (likeNumber) => setlikesCount(likeNumber += 1);
    const decrementCounter = (likeNumber) => setlikesCount(likeNumber -= 1);


    return (
        <View style={styles.row}>
            <IconButton
                icon={liked ? "heart" : "heart-outline"}
                color='#2799fa'
                size={25}
                style={styles.buttonStyle}
                onPress={() =>{likesCount == Number(likes) ? incrementCounter(likesCount) : decrementCounter(likesCount) ; setLiked((isLiked) => !isLiked);}}
            />
            <Text style={styles.likeNumber}>{likesCount}</Text>
        </View>
    )
};

export default LikeBtn;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle: {
        margin: 0,
    },
    likeNumber: {
        fontSize: 20,
        color: '#2799fa',
        marginRight: 10,
    }
});