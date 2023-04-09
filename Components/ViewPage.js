import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../Constant/colors'

const ViewPage = () => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={styles.btn} >
                <Text style={styles.btnText}>View QR Code</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ViewPage

const styles = StyleSheet.create({
    btn: {
        // textAlign:'center',
        width: "50%",
        marginTop: 5,
        height: 50,
        // marginLeft: 140,
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