

import React, {useCallback, useState} from 'react';
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
import axios from 'axios'; // Axios это один из самых популярных HTTP клиентов для браузеров и node.js


const ScreenMain = ({navigation}) => {
  const [input, setInput] = useState(''); // хуки
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const api = {
    key: '486a7dceff36934a00e8daaa99a9630e', // ключ апи
    baseUrl: 'http://api.openweathermap.org/data/2.5/', //ссылка на базу
  };

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput('');
    axios({
      method: 'GET', // с помощью метода GET отправляем запрос, в input хранится введённый нами город, из api вытаскиваем ключ и таким образом формируем сслыку
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    })
      .then(res => {
        setData(res.data); //сохраняем данные в data
      })
      .finally(() => {
        setLoading(false);//прекращаем загрузку
      });
  }, [input, api.key]);
  

  return (
    <View style={styles.root}>

        <ImageBackground
        source={{uri:('https://i.gifer.com/embedded/download/P3Rt.gif')}} //наш задний фон и стиль для него
        style={styles.image}>
          
        <View style={styles.padd}>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Image style={{width:50,height:50, resizeMode:'contain',left:'83%',bottom:'-50%'}} source={{uri:('https://static.tildacdn.com/tild3665-3134-4863-b132-626435376266/img_517622_-min.png')}}/>
              </TouchableOpacity>
          <TextInput //В данном поле мы вводоим название города
            placeholder="Введите город"// задний фон
            style={styles.textInput}//подключаем стили
            onChangeText={text => setInput(text)}// сохраняем в input название нашего города
            placeholderTextColor={'black'}//указываем цвет текста в inputText
            onSubmitEditing={fetchDataHandler}//вызываем функцию fetchDataHandler
            value={input}
          />
          
        </View>
        {loading && ( // загрузка
          <View style={styles.padd}>
            <ActivityIndicator size={'large'} color={'black'} //стиль загрузки 
            /> 
          </View>
        )}
        {data && ( //обработка данных
          <View style={[styles.infoView,styles.padd]} //стили
          >
            <Text
              style={ //стили для города и страны
                styles.cityCountryText
              }>{`${data?.name}, ${data?.sys?.country}`}</Text> 
            <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
            <Text style={styles.tempText}>{`${Math.round(data?.main?.temp,)} °C`}</Text>
            <Text style={styles.minMaxText}>{`Min ${Math.round(data?.main?.temp_min,)} °C / Max ${Math.round(data?.main?.temp_max)} °C`}</Text>
          </View>
          
        )}
        
      </ImageBackground>
      
    </View>
  );
};

export default ScreenMain;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
  },
  log_out:{
    
    width:30,
    height:50,
    resizeMode:'contain',
    alignContent:'flex-end',
    alignItems:'flex-end',
    left: "90%",
    bottom:-85
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
    textAlign: 'center',
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
