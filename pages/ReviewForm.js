import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'
import Button from '../components/Button'

const ReviewValidation = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('test rating 1-5', 'Review test between 1 to 5', (val) => parseInt(val) <= 5 && parseInt(val) >= 1),
})
const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                validationSchema={ReviewValidation}
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, action) => {
                    action.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}> {props.touched.body && props.errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <Button text='Submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm
