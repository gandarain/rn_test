import React, {useEffect, useState} from 'react'
import {View, SafeAreaView, StatusBar, Platform, FlatList, Alert} from 'react-native'
import {getContacts, deleteUser} from '../../services'
import ComponentCardUser from './components/componentCardUser'
import ComponentHeader from './components/componentHeader'
import color from '../../assets/styles/colors'
import styles from './styles/styleHome'

const HomeScreen = () => {
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
      console.log('Error from delete user ', error)
    }
  }

  const requestDelete = (id) => {
    return (
      Alert.alert(
        "Confirmation",
        "Are you sure want to delete this user",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { 
            text: "OK", 
            onPress: () => serviceDeleteUser(id)
          }
        ]
      )
    )
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
            renderItem={({item, index}) => <ComponentCardUser item={item} requestDelete={(id) => requestDelete(id)} />}
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