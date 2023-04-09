import React from 'react'
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scan = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState();

  useEffect(() => {
    (async ()=>{
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
   
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(data);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (!hasPermission) {
    return <Text>Requesting for camera permission</Text>;
  }
 

  return (
   
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(undefined)} />}
      </View>
    
  )
}

export default Scan

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  }
})