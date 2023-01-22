import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import { useState } from 'react';
import { Text } from 'react-native';

var oikea = Math.floor(Math.random() * 100) + 1;
var lkm =1;

export default function App() {

  const [arvaus, setArvaus] = useState('');

  const [text, setText]=useState('');

  const pressed =()=>{
    if(arvaus<oikea){
     setText('Arvauksesi on liian matala, arvaa korkeampaa lukua')
      lkm=lkm +1;
    }else if(arvaus>oikea){
      setText('Arvauksesi on liian korkea, arvaa pienempää lukua')
      lkm=lkm+1;
    }else{
      Alert.alert('Arvasit oikean luvun ' + lkm + ' arvauksella')
      oikea = Math.floor(Math.random() * 100) + 1;
      setArvaus('');
      setText('');
      lkm=1;
    }
};
console.log(oikea)



  return (
    <View style={styles.container}>
      <Text style ={{fontSize:20}}>Arvaa jokin luku 1-100 välillä</Text>
      <Text> {text} </Text>
      
      <TextInput
      style={styles.teksti}
      onChangeText={nro=> setArvaus(nro)}
      value={arvaus}
      />

      <Button 
      title ="Arvaa" 
      onPress={pressed}/>
    
      <StatusBar style="auto" />
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
  teksti: {
    width:200, 
    borderColor:'grey', 
    borderWidth:2, 
    marginBottom: 10
  }
});

