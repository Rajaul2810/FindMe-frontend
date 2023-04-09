import React, { useState } from 'react'
import QR from './QR'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../Constant/colors'
import { FontAwesome5 } from '@expo/vector-icons';
import ViewPage from './ViewPage';

const Home = () => {
  const [info, setInfo] = useState('')

  return (
    <View style={{flex:1}}>
      <View style={{
        backgroundColor: COLORS.main,
        height: 120,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingHorizontal: 20
      }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
          <View style={{ color: 'white' }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Rajaul Karim</Text>
            <Text style={{ color: 'white' }}>rajaulkarim2510@gmail.com</Text>
          </View>
          <View>
            <FontAwesome5 name="user-tie" size={25} style={styles.icon} color={COLORS.main} />
          </View>
        </View>

      </View>
      <ViewPage/>
      {/* <QR /> */}

    </View>


  )
}

export default Home

const styles = StyleSheet.create({
  icon: {
    elevation: 4,
    borderRadius: 500,
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.shadows,
    textAlign: 'center',
    paddingTop: 12,
    marginLeft: 10,
    zIndex: 1,
    marginLeft: 1,


  },

})