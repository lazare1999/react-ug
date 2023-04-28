import { useEffect, useState } from 'react';
import { Button, SafeAreaView, Platform, StatusBar, StyleSheet, Text, View, Pressable } from 'react-native';
import MyAxiosFunctions from './axiosFunctions/axiosFunctions';

const myAxiosFunctions = new MyAxiosFunctions()

export default function App() {

  const [count, setCount] =useState(0) 
  const [data, setData] =useState("ნუ გამასუმაშეცეეეთ")

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
        <Pressable style={styles.btn} onPress={()=>{
          console.log('aaa')
        }}>
          <Text style={styles.txt}>Press Me</Text>
        </Pressable>
        <Text>{JSON.stringify(data)}</Text>
      </View>

    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  btn:{
    backgroundColor:'blue',
    padding:10,
    borderRadius:30,
    shadowColor: "black",
    shadowOffset: {
    width: 0,
    height: 8,
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
  
    elevation: 17,
    },
    txt:{
      color:'white',
    }
  },

})
