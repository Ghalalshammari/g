import React, {useState} from 'react';
import {View, Alert, Text,Image,Button,TextInput, SafeAreaView , StyleSheet,Switch,TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons";


const RadioB =(propes)=>{
const [SelectedValue, setSelectedValue] = React.useState("");
  var component =[];
  for (let i=0 ; i< propes.data.length; i++){
    component.push(
      <TouchableOpacity onPress={()=> setSelectedValue(propes.data[i].key)}>
      <Text>
       <Ionicons name={SelectedValue=== propes.data[i].key ? 
           "radio-button-on" : "radio-button-off"}
           size={20} color="red"/> {propes.data[i].value}
      </Text>
      </TouchableOpacity>
      
    ) }
    return(
    <View>{component}</View>
    );
};
const App = () => {
  const [text, setText]= React.useState("");
  const [id, setId]= React.useState(null);
  const [pass, setPass]= React.useState(null);
  const [address,setAddress]= React.useState("");

const onSave = () => {
    const data = {
      text,
      id,
      pass,
      address,
    };
    Alert.alert('Entered data', JSON.stringify(data));
  };

  let items= [
    {key: "Male",value:"Male"},{key:"Female", value:"Female"} ]

  const [isEnabled, setIsEnabled] = useState(false);

  return(

     <SafeAreaView style={styles.container}>
      
        <Image
        style={styles.image}
        source={{
          uri:'https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small/user-profile-icon-free-vector.jpg',
        }}
        />
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Enter Your Name"
        />
        <RadioB data={items}/>
     <Text>Do you have a car?</Text>
     <Switch
     trackColor={{false: 'gray', true: 'lightgreen'}}
     thumbColor={isEnabled ? 'green' : 'white'}
     onValueChange={setIsEnabled}
     value={isEnabled}
     />
    
         <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={pass}
          placeholder="Enter Your Password"
          secureTextEntry= {true}
        />

        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder="Enter Your Address"
        />

        <TextInput
          style={styles.input}
          onChangeText={setId}
          value={id}
          placeholder="Enter Your Academic Number"
          keyboardType= 'numeric'
        />

       <TouchableOpacity onPress={onSave} style={styles.savebutton}>
        <Text style={styles.txt}>Save</Text>
      </TouchableOpacity>
        </SafeAreaView>   

  );}
  
  
      const styles= StyleSheet.create({
          container:{
            fiex:1,
            alignItems:"center",
            justifyContent: "center",
            
          },
          input: {
            background:'lightgray',
            borderWidth:1,
            margin:10,
            height: 40,
            padding:10,
          },
          image:{
            width:200,
            height:200,
          },

          savebutton:{
            background:'lightblue',
            margin:10,
            padding:5,

          },
          txt:{
            fontSize:20,
          },
 
        });
      export default App;