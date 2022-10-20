import React from 'react';
import {Button, Text,View,StyleSheet} from 'react-native';

 function Home(props)
{
    const{navigation} = props; 
    return(
        <View  style={styles.nav}> 
            <Text style={styles.etiqueta}>App desarrollada por</Text>
            <Text style={styles.etiqueta}>Liliana Lopez</Text>
            <Text style={styles.etiqueta}>Denilson Cruz</Text>
        </View>
    );
}

    const styles = StyleSheet.create({
    nav:
    {
        padding:20,
        alignContent:'center',
   
    },
    etiqueta:
    {
        fontSize: 25
    }
});

export default Home;