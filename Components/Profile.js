import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import COLORS from '../Constant/colors';

const Profile = () => {
  return (
    <SafeAreaView >
      <View>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'5%' }}>
          <Image style={{ height: 100, alignSelf: 'center' }} source={require('../assets/person.png')} />
          <Text style={{ fontWeight: '600', fontSize: 20 }}>Name: Rajaul Karim</Text>
          <Text style={{color:COLORS.txt}}>Email: rajaulkarim2810@gmail.com</Text>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', marginLeft:'5%',marginRight:'5%',marginTop:'15%',marginBottom:'2%', backgroundColor:COLORS.white, borderRadius:6 }}>
          <View style={{ flexDirection: 'row', }}>
            <Feather name="edit" size={24} color="#f08080" style={{ backgroundColor: '#f2e9e4', padding: 10, borderRadius: 100, }} />
            <Text style={{ fontSize: 18, color: COLORS.txt, paddingLeft: 15, padding: 10, }}>Edit Profile</Text>
          </View>
          <View>
            <Feather name="chevron-right" size={30} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center',  marginLeft:'5%',marginRight:'5%',marginTop:'2%',marginBottom:'2%', backgroundColor:COLORS.white, borderRadius:6 }}>
            <View style={{ flexDirection: 'row', }}>
              <Feather name="bell" size={24} color="#c9184a" style={{ backgroundColor: '#ffccd5', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.txt, paddingLeft: 15, padding: 10, }}>Notifications</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={30} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', marginLeft:'5%',marginRight:'5%',marginTop:'2%',marginBottom:'2%', backgroundColor:COLORS.white, borderRadius:6 }}>
          <View style={{ flexDirection: 'row', }}>
            <Feather name="edit" size={24} color="#2a9d8f" style={{ backgroundColor: '#caf0f8', padding: 10, borderRadius: 100, }} />
            <Text style={{ fontSize: 18, color: COLORS.txt, paddingLeft: 15, padding: 10, }}>Edit QR Code</Text>
          </View>
          <View>
            <Feather name="chevron-right" size={30} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', marginLeft:'5%',marginRight:'5%',marginTop:'2%',marginBottom:'2%', backgroundColor:COLORS.white, borderRadius:6 }}>
          <View style={{ flexDirection: 'row', }}>
            <Feather name="users" size={24} color='#f6aa1c' style={{ backgroundColor: '#efefd0', padding: 10, borderRadius: 100, }} />
            <Text style={{ fontSize: 18, color: COLORS.txt, paddingLeft: 15, padding: 10, }}>Friends</Text>
          </View>
          <View>
            <Feather name="chevron-right" size={30} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', marginLeft:'5%',marginRight:'5%',marginTop:'2%',marginBottom:'2%', backgroundColor:COLORS.white, borderRadius:6 }}>
          <View style={{ flexDirection: 'row', }}>
            <Feather name="log-out" size={24} color='#c9184a' style={{ backgroundColor: '#e9ecef', padding: 10, borderRadius: 100, }} />
            <Text style={{ fontSize: 18, color: COLORS.txt, paddingLeft: 15, padding: 10, }}>Logout</Text>
          </View>
          <View>
            <Feather name="chevron-right" size={30} color="black" />
          </View>
        </TouchableOpacity>

        
          
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})