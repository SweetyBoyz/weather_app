

import React, {useCallback, useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Image,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'; // Axios это один из самых популярных HTTP клиентов для браузеров и node.js


const Boston = ({navigation}) => {
  const [input, setInput] = useState(''); // хуки
  const [data, setData] = useState([]);
  

  const api = {
    key: '486a7dceff36934a00e8daaa99a9630e', // ключ апи
    baseUrl: 'http://api.openweathermap.org/data/2.5/', //ссылка на базу
  };

  const fetchDataHandler = useCallback(() => {
   
    setInput('');
    axios({
      method: 'GET', // с помощью метода GET отправляем запрос, в input хранится введённый нами город, из api вытаскиваем ключ и таким образом формируем сслыку
      url: `https://api.openweathermap.org/data/2.5/weather?q=${'Boston'}&units=metric&appid=${api.key}`,
    })
      .then(res => {
        setData(res.data); //сохраняем данные в data
      });
      
  }, [input, api.key]);
  
  useEffect(() => {
    fetchDataHandler();
  }, []);
  return (
    <View style={styles.root}>

        <ImageBackground
        source={{uri:('https://i.gifer.com/embedded/download/P3Rt.gif')}} //наш задний фон и стиль для него
        style={styles.image}>
          
        
        
        {data && (
          <View style={[styles.infoView,styles.padd]}>
            <Text
              style={
                styles.cityCountryText
              }>{`${data?.name}, ${data?.sys?.country}`}</Text>
            <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
            <Text style={styles.tempText}>{`${Math.round(
              data?.main?.temp,)} °C`}</Text>
            <Text style={styles.minMaxText}>{`Min ${Math.round(data?.main?.temp_min,)} °C / Max ${Math.round(data?.main?.temp_max)} °C`}</Text>
          </View>
          
        )}
        
      </ImageBackground>
      
    </View>
  );
};

export default Boston;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
  },
  

  textInput: {
    borderBottomWidth: 3,
    padding: 20,
    paddingVertical: 20,
    marginVertical: '10%',
    marginHorizontal: '5%',
    backgroundColor: '#fff',
    fontSize: 19,
    fontWeight: '300',
    borderRadius: 16,
    borderBottomColor: '#df8e00',
    
  },

  cityCountryText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },

  infoView: {
    alignItems: 'center',
  },
  padd: {
    bottom:'-3%',

  },

  dateText: {
    color: 'black',
    fontSize: 22,
    marginVertical: 10,
  },
  tempText: {
    fontSize: 45,
    color: 'black',
    marginVertical: 10,
  },
  minMaxText: {
    fontSize: 22,
    color: 'black',
    marginVertical: 10,
    fontWeight: '500',
  },
});
