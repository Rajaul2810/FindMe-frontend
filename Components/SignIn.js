import { View, Text, StyleSheet, Image, TextInput, Alert, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import COLORS from '../Constant/colors'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import React, { useContext, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../Context/UserContext';

const SignIn = ({ navigation }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    check_textInputChange: false,
    validEmail: false
  })
  const onChangeText = (val) => {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (val.match(mailFormat)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      })
    } else {
      setData({
        ...data,
        check_textInputChange: false,
        validEmail: true
      })
    }
  }
  const handlePassword = (val) => {
    setData({
      ...data,
      password: val,

    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  // context data
  const { loading, userInfo, login } = useContext(AuthContext);


  return (

    <View style={styles.main}>

      <View style={styles.logoContainer}>
        <Image

          style={styles.logo}
          source={require('../assets/logo.png')}
        />
      </View>
      <View>
        <Text style={styles.welcome}>Welcome back!</Text>
        <Text style={styles.txt}>Login to your account</Text>

      </View>
      <View style={styles.customInput}>
        <Feather style={styles.icon} name="mail" size={24} color={COLORS.main} />
        <TextInput
          style={styles.input}
          onChangeText={(val) => onChangeText(val)}
          placeholder="Email"
          name="email"
          require
        />
        {data.check_textInputChange ?
          <Animatable.Text style={styles.icon2} animation="bounceIn"> <Feather name="check-circle" size={24} color="green" /></Animatable.Text>
          : null}
        {data.validEmail ?
          <Animatable.Text style={styles.icon2} animation="bounceIn"> <Entypo name="cross" size={24} color="red" /></Animatable.Text>
          : null
        }
      </View>
      <View style={styles.customInput}>
        <AntDesign style={styles.icon} name="lock" size={24} color={COLORS.main} />
        <TextInput
          style={styles.input}
          onChangeText={(val) => handlePassword(val)}

          placeholder="Password"
          name='password'
          require
          autoCapitalize='none'
          secureTextEntry={data.secureTextEntry ? true : false}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? <Feather style={styles.icon3} name="eye-off" size={24} color={COLORS.txt} /> : <Feather style={styles.icon3} name="eye" size={24} color={COLORS.txt} />}

        </TouchableOpacity>

      </View>
      <TouchableOpacity onPress={()=>login(data.email,data.password)} style={styles.btn}>
        <Text style={styles.btnText}>SIGN IN</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <Text style={styles.orText}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Registration')} ><Text style={{ color: COLORS.main }}>Sign up here</Text></Pressable>
      </View>
    </View>

  )
}
export default SignIn

const styles = StyleSheet.create({
  main: {
    paddingTop: '15%',
    backgroundColor: COLORS.bg,
    height: '100%',
    width: '100%',
    fontFamily: 'sans-serif',

  },
  logoContainer: {
    height: '25%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    //backgroundColor:'red'
  },
  logo: {
    height: '100%',
    width: '40%',

  },
  welcome: {
    fontSize: 35,
    color: COLORS.txt,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5

  },
  txt: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.txt,
    marginBottom: 10,
  },
  customInput: {
    flexDirection: 'row',
    margin: 15,

    //alignItems:'center'
    //marginRight:10,

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
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: COLORS.white,
    marginLeft: 30,
    position: 'absolute',

  },
  icon2: {
    //textAlign: 'center',
    paddingTop: 12,
    marginLeft: 290,

  },
  icon3: {
    paddingTop: 12,
    position: "absolute",
    marginLeft: 290,
  },
  btn: {
    // textAlign:'center',
    width: 150,
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

  },
  btnText: {
    //height:50,
    fontSize: 20,
    color: COLORS.bg,
    fontWeight: '800'
  },
  or: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'

  },
  orText: {
    color: COLORS.txt,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10
  },

})