/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeBaseProvider, Flex, Spacer} from 'native-base';
import {useState,useEffect} from 'react';
import data from './data';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  useColorScheme,
  View,
  Pressable,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {fontSize, padding} from '@mui/system';

const App = () => {
  const [nine, setNine] = useState([]);
  const [ans, setAns] = useState("");
  console.log(nine);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
 const handleClear=()=>{
  nine.pop();
  setNine(prevState => [...prevState]);
  setAns(nine.length===0?"":ans);

 }
 const calc=()=>{
  const theAns= eval(nine.join(""));
  setAns(theAns);
  // setNine([theAns]);
  // setAns("")
 }
  const [counter, setCounter] = useState(0);
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{backgroundColor: 'white', height: '23%',padding:10}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'light-content'} />
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
          <View  style={{flexDirection: 'row',flexWrap:"wrap"}}>
            {nine?.map((data,index)=>(
              <Text style={{color: 'black', fontSize:nine.length>=35?20:30,flexDirection: 'row'}} key={index}>
              {data}
            </Text>
            ))}
          </View>
        <View style={{ borderRadius: 20,position:"relative",top:25}}>
          <TextInput
            editable={false}
            numberOfLines={1}
            textAlign='right'
            // maxLength={36}
            style={{fontSize: 31, color: 'grey'}}
            // onChangeText={onChangeText}
            value={`${ans}`}
          />
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
      <View>
        <View style={styles.grid}>
          <TouchableOpacity
            onPress={() =>{setNine(prevState => [...prevState, 9]);}}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
              }}>
              <Text style={{fontSize: 50}}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, 8])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
              }}>
              <Text style={{fontSize: 50}}>8</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, 7])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
              }}>
              <Text style={{fontSize: 50}}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClear}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: '#CA0000',
                padding: 30.5,
                borderWidth: 0.4,
              }}>
              <Text style={{fontSize: 50}}>D</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, 6])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, 5])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, 4])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, "/"])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: '#FEC93E',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>/</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, 3])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, 2])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, 1])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, "*"])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: '#FEC93E',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>x</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, "."])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, 0])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, "+"])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: 'grey',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNine(prevState => [...prevState, "-"])}>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: '#FEC93E',
                padding: 30.5,
                borderWidth: 0.4,
                minWidth: 90,
              }}>
              <Text style={{fontSize: 50}}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() =>calc() }>
            <View
              style={{
                border: 'white 20px solid',
                backgroundColor: '#FEC93E',
                padding: 30.5,
                borderWidth: 0.4,
              }}>
              <Text style={{fontSize: 30, textAlign: 'center'}}>=</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  grid: {
    display: 'flex',
    flexDirection: 'row',
  },
  stylers: {
    border: 'white 20px solid',
    backgroundColor: 'grey',
    padding: 30.5,
    borderWidth: 0.4,
  },
});

export default App;
