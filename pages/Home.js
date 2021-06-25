import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../components/Card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'
const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ])
    const [modalOpen, setModalOpen] = useState(false)
    const addReview = (review) => {
        review.key = Math.random().toString()
        setReviews((p) =>
            [review, ...p]
        )
        setModalOpen(false)
    }
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.ModalContent}>
                        <MaterialIcons
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            name='close'
                            size={25}
                            onPress={() => setModalOpen(false)}
                        />

                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.push('ReviewDetails', item)}>
                        <Card><Text style={globalStyles.titleText}>{item.title}</Text></Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    ModalContent: {
        flex: 1,
    }
})