import React from "react";
import { StyleSheet, View,Text,Image, TouchableOpacity} from 'react-native';





function MathScreen ({navigation}) {
    return(

          <View> 
            <Text style={styles.text}>
              Курсовая работа на тему: Разработка мобильного погодного приложения.
            </Text>
            <Text style={[styles.text, styles.padd]} >
              Работа выполнена студентом Финансового Университета при правительстве РФ Иналом Маремкуловым
            </Text>
            <Text style={[styles.text, styles.padd]} >
              Группа Пи20-4
            </Text>
            <Text style={[styles.text, styles.padd]} >
              Научный руководитель
            </Text>
            <Text style={[styles.text, styles.padd]} >
              Хасаншин Ильшат Ядыкарович
            </Text>
            <View style={styles.fn}>
            <Text style={[styles.text, styles.padd]}>
              FinUnivCorp © 2022 Маремкулов Инал
            </Text>
            </View>
          </View>
            
        );
                }
  const styles = StyleSheet.create({    
  text: {
    textAlign: 'center',
    fontSize: 20,
    bottom: '-30%',
  },
  padd: {
    padding: '2%',
  },
  fn: {
    bottom: '-190%'
  }
  });



export default MathScreen;
