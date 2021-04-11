import React, {useEffect, useState} from 'react'
import {View, SafeAreaView, StatusBar, Platform, FlatList, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import {getContacts, deleteUser} from '../../services'
import {setDataUser} from '../../redux/actions/addUserAction'
import ComponentCardUser from './components/componentCardUser'
import ComponentHeader from './components/componentHeader'
import color from '../../assets/styles/colors'
import styles from './styles/styleHome'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [listContacts, setListContacts] = useState([])
  const [loading, setLoading] = useState(true)

  const serviceListContacts = async () => {
    try {
      const response = await getContacts()
      setLoading(false)
      setListContacts(response.data)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    serviceListContacts()
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      serviceListContacts()
    })

    return unsubscribe
  }, [navigation])

  const onRefresh = () => {
    setListContacts([])
    setLoading(true)
    serviceListContacts()
  }

  const serviceDeleteUser = async (id) => {
    try {
      await deleteUser(id)
      setLoading(true)
      serviceListContacts()
    } catch (error) {
      Alert.alert('Error', 'Something wrong with our server.')
    }
  }

  const requestDelete = (id) => {
    return Alert.alert('Confirmation', 'Are you sure want to delete this user', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => serviceDeleteUser(id)
      }
    ])
  }

  const editUser = (data) => {
    dispatch(setDataUser({id: data.id, firstName: data.firstName, lastName: data.lastName, age: data.age.toString(), photo: data.photo}))
    navigation.navigate('Create')
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} hidden={false} backgroundColor={color.thema} translucent />
      <SafeAreaView style={styles.safeAreaTop}>
        <View style={styles.container}>
          <FlatList
            onRefresh={() => onRefresh()}
            refreshing={loading}
            data={listContacts}
            renderItem={({item}) => <ComponentCardUser item={item} requestDelete={(id) => requestDelete(id)} requestEdit={() => editUser(item)} />}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={() => <ComponentHeader />}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.safeAreaBottom} />
    </View>
  )
}

export default HomeScreen
