import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../Constant/colors'
import { FontAwesome5, FontAwesome, Feather } from '@expo/vector-icons';
import SvgQRCode from 'react-native-qrcode-svg';
import RBSheet from "react-native-raw-bottom-sheet";

const QR = () => {
  const [info, setInfo] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [facebook, setFacebook] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [github, setGithub] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [youtube, setYoutube] = useState('')


  const QRGenerate = () => {
    const newInfo = { email, phone, facebook, linkedin, instagram, twitter, github, whatsapp, youtube }
     return <SvgQRCode size={250} value={JSON.stringify(newInfo)}/>
  }

  const refRBSheet = useRef();

  return (
    <View style={{
      backgroundColor: "#fffff",
      flex: 1
    }}>
      
      <Text style={{ marginTop: 5, textAlign: 'center', fontSize: 20 }}>Generate QR code with required information.</Text>
      <ScrollView style={{ marginTop: 5, marginBottom: 100 }}>

        <View style={styles.customInput}>
          <Feather style={styles.icon} name="mail" size={25} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setEmail(value)}
            placeholder="Email"
            name="email"
           
          />
          {/* {data.check_textInputChange ?
              <Animatable.Text style={styles.icon2} animation="bounceIn"> <Feather name="check-circle" size={24} color="green" /></Animatable.Text>
              : null} */}
        </View>
        <View style={styles.customInput}>
          <Feather style={styles.icon} name="phone" size={25} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setPhone(value)}

            placeholder="phone number"
            name="phone"
           
          />
        </View>
        <View style={styles.customInput}>

          <Feather style={styles.icon} name="facebook" size={25} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setFacebook(value)}
            placeholder="facebook link"
            name="facebook"
          
          />
          {/* {data.check_textInputChange ?
              <Animatable.Text style={styles.icon2} animation="bounceIn"> <Feather name="check-circle" size={24} color="green" /></Animatable.Text>
              : null} */}
        </View>
        <View style={styles.customInput}>
          <Feather style={styles.icon} name="linkedin" size={25} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setLinkedin(value)}
            placeholder="linkedin link"
            name="linkedin"
            
          />
        </View>
        <View style={styles.customInput}>
          <Feather style={styles.icon} name="instagram" size={25} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setInstagram(value)}
            placeholder="instagram link"
            name="instagram"
           
          />
        </View>
        <View style={styles.customInput}>
          <Feather style={styles.icon} name="twitter" size={25} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setTwitter(value)}
            placeholder="twitter link"
            name="twitter"
          
          />
        </View>
        <View style={styles.customInput}>
          <Feather style={styles.icon} name="github" size={25} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setGithub(value)}
            placeholder="github link"
            name="github"
           
          />
        </View>
        <View style={styles.customInput}>
          <FontAwesome style={styles.icon} name="whatsapp" size={25} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setWhatsapp(value)}
            placeholder="whatsapp number"
            name="whatsapp"
           
          />
        </View>
        <View style={styles.customInput}>
          <Feather style={styles.icon} name="youtube" size={25} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setYoutube(value)}
            placeholder="youtube link"
            name="youtube"
            
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => refRBSheet.current.open()}>
          <Text style={styles.btnText}>Generate QR Code</Text>
        </TouchableOpacity>
      </ScrollView>
      

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height= {400}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
             <QRGenerate />
        </View>
      </RBSheet>
      
    </View>

  )
}

export default QR

const styles = StyleSheet.create({

  customInput: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,

  },
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
  input: {
    elevation: 4,
    padding: 10,
    width: '90%',
    paddingLeft: 30,
    shadowColor: COLORS.shadows,
    borderRadius: 6,
    fontSize: 15,
    backgroundColor: COLORS.white,
    marginLeft: 30,
    position: 'absolute',

  },
  btn: {
    // textAlign:'center',
    width: "50%",
    marginTop: 5,
    height: 50,
    marginLeft: 140,
    elevation: 1,
    backgroundColor: COLORS.main,
    shadowColor: COLORS.shadows,
    borderRadius: 30,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,

  },
  btnText: {
    //height:50,
    fontSize: 20,
    color: COLORS.bg,
    fontWeight: '800'
  },
})