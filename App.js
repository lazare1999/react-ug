import { useEffect, useState } from 'react';
import { Button, SafeAreaView, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import MyAxiosFunctions from './axiosFunctions/axiosFunctions';

const myAxiosFunctions = new MyAxiosFunctions()

export default function App() {

  const [count, setCount] =useState(0) 
  const [data, setData] =useState(null)

  useEffect(()=>{

    myAxiosFunctions.getProducts().then(response=>{
      setData(response.data)
    }).catch(err=>{
      console.log(err.response.data)
    })

    // const interval =setInterval(()=>{
    //   console.log('setInterval')
    // }, 2000)
    

    // return ()=>{
    //   clearInterval(interval)
    // }

  }, [])

  return (
    <SafeAreaView style={{marginTop: Platform.OS=='android'?StatusBar.currentHeight:0}}>
       <View>
        <Button title={count.toString()} onPress={()=>{
          setCount(count+1)
        }}/>
        <Text>{JSON.stringify(data)}</Text>
      </View>

    </SafeAreaView>
   
  );
}