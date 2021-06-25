import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'

const Header = ({ navigation, title }) => {
    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' onPress={openMenu} size={32} style={styles.icon} />
            <View style={styles.imageContainer}>
                <Image source={require('../assets/heart_logo.png')} style={styles.heartImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
        // paddingTop: 40,

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#CCC',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 30,
        top: 40,
        color: '#CCC',
        width: 30,
        height: 30,

    },
    heartImage: {
        width: 26,
        height: 26,
        marginRight: 3,
    },
    imageContainer: {
        flexDirection: 'row',
        margin: 10,
        marginTop: 40
    }
})

export default Header


