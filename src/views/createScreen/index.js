import React, {useState} from 'react'
import {View, ScrollView, Alert} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Header from '../../assets/components/header'
import * as yup from 'yup'
import {Formik} from 'formik'
import _ from 'lodash'
import {useNavigation} from '@react-navigation/native'
import TextInputComponent from '../../assets/components/textInput'
import TextErrorComponent from '../../assets/components/textErrorComponent'
import ButtonFullComponent from '../../assets/components/buttonFull'
import LoadingComponent from '../../assets/components/loader'
import {addDataUser} from '../../redux/actions/addUserAction'
import {postUser, patchUser} from '../../services'

const CreateScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const addUserReducer = useSelector((state) => state.addUserReducer)
  const [loading, setLoading] = useState(false)

  const createUser = async () => {
    try {
      await postUser(addUserReducer)
      setLoading(false)
      navigation.goBack()
    } catch (error) {
      setLoading(false)
      Alert.alert('Error', 'Something wrong with our server')
    }
  }

  const editUser = async () => {
    const body = _.cloneDeep(addUserReducer)
    delete body.id
    try {
      await patchUser(body, addUserReducer.id)
      setLoading(false)
      navigation.goBack()
    } catch (error) {
      setLoading(false)
      Alert.alert('Error', 'Something wrong with our server')
    }
  }

  const submitDataUser = async () => {
    setLoading(true)
    if (addUserReducer.id) {
      editUser()
    } else {
      createUser()
    }
  }

  return (
    <View style={{flex: 1}}>
      <Header left="arrow-left" body="Create User" />
      <ScrollView contentContainerStyle={{padding: 20}} showsVerticalScrollIndicator={false}>
        <Formik
          enableReinitialize
          initialValues={{
            firstName: addUserReducer.firstName,
            lastName: addUserReducer.lastName,
            age: addUserReducer.age,
            photo: addUserReducer.photo
          }}
          onSubmit={() => submitDataUser()}
          validationSchema={yup.object().shape({
            firstName: yup
              .string()
              .required('Please enter first name!')
              .matches(/^[a-zA-Z]+$/, 'Invalid first name!'),
            lastName: yup
              .string()
              .required('Please enter last name!')
              .matches(/^[a-zA-Z]+$/, 'Invalid last name!'),
            age: yup
              .string()
              .required('Please enter age!')
              .matches(/^[0-9]+$/, 'Invalid age!'),
            photo: yup
              .string()
              .required('Please enter image url.')
              .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Invalid image url!')
          })}>
          {({handleChange, errors, handleSubmit}) => (
            <View>
              <TextInputComponent
                placeholder="First Name"
                value={addUserReducer.firstName}
                onChangeText={(value) => {
                  handleChange('firstName')
                  dispatch(addDataUser({name: 'firstName', value: value}))
                }}
                keyboardType="default"
                autoCapitalize="words"
                icon="rocket"
              />
              {errors.firstName && <TextErrorComponent error={errors.firstName} />}
              <TextInputComponent
                placeholder="Last Name"
                value={addUserReducer.lastName}
                onChangeText={(value) => {
                  handleChange('lastName')
                  dispatch(addDataUser({name: 'lastName', value: value}))
                }}
                keyboardType="default"
                autoCapitalize="words"
                icon="rocket"
              />
              {errors.lastName && <TextErrorComponent error={errors.lastName} />}
              <TextInputComponent
                placeholder="Age"
                value={addUserReducer.age}
                onChangeText={(value) => {
                  handleChange('age')
                  dispatch(addDataUser({name: 'age', value: value}))
                }}
                keyboardType="number-pad"
                autoCapitalize="none"
                icon="calendar"
              />
              {errors.age && <TextErrorComponent error={errors.age} />}
              <TextInputComponent
                placeholder="Image URL"
                value={addUserReducer.photo}
                onChangeText={(value) => {
                  handleChange('photo')
                  dispatch(addDataUser({name: 'photo', value: value}))
                }}
                keyboardType="default"
                autoCapitalize="none"
                icon="image"
              />
              {errors.photo && <TextErrorComponent error={errors.photo} />}
              <ButtonFullComponent title="Submit" handleSubmit={() => handleSubmit()} />
            </View>
          )}
        </Formik>
        <LoadingComponent loading={loading} closeModal={() => setLoading(false)} />
      </ScrollView>
    </View>
  )
}

export default CreateScreen
