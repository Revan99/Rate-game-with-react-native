import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 70,
        backgroundColor: '#fff',
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#E4314E',
        textAlign: 'center'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 18,
        padding: 10,
        borderRadius: 6,
        marginBottom: 10,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    }
})