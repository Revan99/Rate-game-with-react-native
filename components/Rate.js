import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const Rate = ({ rate }) => {
    return (
        <View style={styles.ratingContainer}>
            <Text>Game Zone Rating:</Text>
            {Number(rate) === 1 && <Image source={require('../assets/rating-1.png')} />}
            {Number(rate) === 2 && <Image source={require('../assets/rating-2.png')} />}
            {Number(rate) === 3 && <Image source={require('../assets/rating-3.png')} />}
            {Number(rate) === 4 && <Image source={require('../assets/rating-4.png')} />}
            {Number(rate) === 5 && <Image source={require('../assets/rating-5.png')} />}
        </View>
    )
}

export default Rate

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        justifyContent: 'center'
    }
})