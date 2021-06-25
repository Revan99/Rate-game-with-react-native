import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../components/Card'
import Rate from '../components/Rate'
const ReviewDetails = ({ route }) => {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <Rate rate={route.params.rating} />
            </Card>
        </View>
    )
}

export default ReviewDetails
