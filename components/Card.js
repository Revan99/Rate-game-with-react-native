import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({ children }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {children}
            </View>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginVertical: 6,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        borderRadius: 6,
        backgroundColor: 'white'

    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }

})