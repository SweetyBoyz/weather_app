import React from "react";
import { StyleSheet, View,Text,ImageBackground, TouchableOpacity} from 'react-native';




function Menu ({navigation}) {
    return(
        <ImageBackground
        source={{uri:('https://i.gifer.com/embedded/download/P3Rt.gif')}} //наш задний фон и стиль для него
        style={styles.image}>
        
            
            <View > 

            <TouchableOpacity style={[styles.button, styles.button_moscow]} onPress={() => navigation.navigate('Moscow')}>            
                <Text style={styles.text}>Москва</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.button_london]} onPress={() => navigation.navigate('London')}>
                <Text style={styles.text}>Лондон</Text>
            </TouchableOpacity>
                
            <TouchableOpacity style={[styles.button,styles.button_boston]} backgroundColor='#157F92' onPress={() => navigation.navigate('Boston')}>
                <Text style={styles.text}>Бостон</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={[styles.button,styles.button_info]} backgroundColor='#157F92' onPress={() => navigation.navigate('Info')}>
                <Text style={styles.text}>Информация о разработчике</Text>
            </TouchableOpacity> 
            
             
            
        
            </View>
            </ImageBackground>
           
        );
                }

        const styles = StyleSheet.create({
        
            
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 4,
            borderRadius: 3,
            elevation: 13,
            width: '85%',
            height: 60,
            left: '8%',
            
            

        },
        button_moscow: {
            bottom: '-30%',
            backgroundColor: '#FFB938',
        },
        image: {
            flex: 1,
            flexDirection: 'column',
          },
       
        button_london: {
            bottom: '-35%',
            backgroundColor: '#E39C19',
        },
        button_boston: {
            bottom: '-40%',
            backgroundColor: '#C88811',
        },
        button_info: {
            bottom: '-45%',
            backgroundColor: '#AD7103',
        },
        

        text: {
            justifyContent: "center",
            textAlign: "center",
            fontSize: 20,
            color: "#F3F3CD",
    
          },
        });
    


export default Menu;
