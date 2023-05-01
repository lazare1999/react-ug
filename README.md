# react_ug
reaqtis leqciebi simon

დააყენეთ node.js თუ არ აყენია    
ადმინისტრატორის პაროლი:Gssc6
Wifi Guest პაროლი:54545656

1. npm install -g expo-cli
2. expo init ./
3. თუ ერორი მოგვცა მეორემ მაშინ,  ვხსნით powershells run as administrator-ით, ვაკოპირებთ  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned,  ვაჭერთ yes to all
4. expo init ./  გაშვების შემდეგ ვირჩევთ blank თემფლეითს

აპლიკაციის გაშვება expo start ბრძანებით



ეს იქნება შუალედურში

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count,setCount] = useState(0)
  const [text,setText] = useState('')

  useEffect(()=>{
    setText('count არის ' + count)
  },[count] )


  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <Pressable style ={styles.btn} onPress={()=>{
       setCount(count+1)
      }}>
      <Text style={styles.text}>ღილაკი</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor: 'blue',
    borderRadius:30,
    padding:10,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  text:{
    color: 'white',
    
    
    

  }
});
