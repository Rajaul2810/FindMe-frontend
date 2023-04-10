import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import React, { useContext, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { Image } from 'react-native';
import COLORS from '../Constant/colors';
import { AuthContext } from '../Context/UserContext';


const SignUp = ({ navigation }) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    secureTextEntry: true,
    check_textInputChange: false,
    check_name: false,
    validEmail:false,
    validName:false,
  })
  console.log(data);
  const onChangeName = (val) => {
    if (val.length > 2) {
      setData({
        ...data,
        name: val,
        check_name: true,
      })
    } else {
      setData({
        ...data,
        check_name: false,
        validName:true
      })
    }
  }
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
        validEmail:true
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
  const { loading, register, userInfo } = useContext(AuthContext);
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <ScrollView > */}
        <View style={styles.main}>

          <View style={styles.logoContainer}>
            <Image

              style={styles.logo}
              source={require('../assets/logo.png')}
            />
          </View>
          <View>
            <Text style={styles.welcome}>Welcome!</Text>
            <Text style={styles.txt}>Create your account</Text>

          </View>
          <View style={styles.customInput}>
            <Feather style={styles.icon} name="user" size={24} color={COLORS.main} />
            <TextInput
              style={styles.input}
              onChangeText={(val) => onChangeName(val)}
              placeholder="Name"
              name="name"
              
            />
            {data.check_name ?
              <Animatable.Text style={styles.icon2} animation="bounceIn"> <Feather name="check-circle" size={24} color="green" /></Animatable.Text>
              : null //<Animatable.Text style={styles.icon2} animation="bounceIn"> <Entypo name="cross" size={24} color="red" /></Animatable.Text>
              }
              {data.validName ?
              <Animatable.Text style={styles.icon2} animation="bounceIn"> <Entypo name="cross" size={24} color="red" /></Animatable.Text>
              : null 
              }
          </View>
          <View style={styles.customInput}>
            <Feather style={styles.icon} name="mail" size={24} color={COLORS.main} />
            <TextInput
              style={styles.input}
              onChangeText={(val) => onChangeText(val)}
              placeholder="Email"
              name="email"
              
            />
            {data.check_textInputChange ?
              <Animatable.Text style={styles.icon2} animation="bounceIn"> <Feather name="check-circle" size={24} color="green" /></Animatable.Text>
              : null //<Animatable.Text style={styles.icon2} animation="bounceIn"> <Entypo name="cross" size={24} color="red" /></Animatable.Text>
            }
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
          <TouchableOpacity onPress={()=> register(data.name,data.email,data.password)} style={styles.btn}>
            <Text style={styles.btnText}>SIGN UP</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            <Text style={styles.orText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Login')} ><Text style={{ color: COLORS.main }}>Login</Text></Pressable>
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  main: {
     paddingTop: 10,
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
    backgroundColor:COLORS.white,
    marginLeft: 30,
    position: 'absolute',

  },
  icon2: {
    //textAlign: 'center',
    paddingTop: 12,
    marginLeft: 300,

  },
  icon3: {
    paddingTop: 12,
    position: "absolute",
    marginLeft: 300,
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