import { validate } from '@babel/types';
import  React, {useEffect, useState } from 'react';
import { 
        View,
        Text,
        TouchableOpacity,
        StyleSheet,
        TextInput,
        Alert,
     }from 'react-native';
import OcultarTeclado from '../utils/OcultarTeclado';
import  colores  from '../utils/colors';

const FrmRaiz = (props) =>
{   
    const {setV1,operar} = props;
    return(
    <>
        <TextInput onChange={e=>{setV1(parseFloat(e.nativeEvent.text))}} style={styles.txtValores} placeholder="valor"  keyboardType='numeric'/>
        <TouchableOpacity style={styles.btnCalcular} onPress={operar}>
            <Text style={styles.textBtnCalcular}>Calcular</Text>
        </TouchableOpacity>
    </>
    );
}

const ResultArea = (props) =>
{
    const {respuesta,error} = props;
    return(
        <>  
            <Text style={styles.lblError}>{error}</Text>
            <Text style={styles.lblResultado}>La respuesta es:</Text>
            <Text numberOfLines={2} style={styles.lblResultado}>{respuesta}</Text>
        </>
        );
}

export default function Factorial(props)
{   
    const [v1,setV1]                = useState(0);
    const [respuesta,setRespuesta]  = useState(0);
    const [error,setError]          = useState("");

    const{navigation} = props;
    useEffect(()=>
    {
        if(!v1)
        {  
            reset();
            setError("Debe completar todos los datos");
        }
        else
        {
            reset();
        }
    });    

      function reset ()
      {
         setError("");
      }//fin de reset

      const operar = ()=>
    {   
        let value = 0;
          if(v1 || v1 > 0)  // <-----  REVISAR
          {
            value = Math.sqrt(v1);

            setRespuesta(value);
            reset();
            
          }
          else
          {   

              reset();
              setError("Debe ingresar  un número positivo");
              alert("Debe ingresar un número positivo");
          }
    }// fin de operar

        return(
            <OcultarTeclado>
                <View> 
                    <FrmRaiz setV1={setV1}  operar={operar} />
                    <ResultArea respuesta={respuesta} error={error}/>   
                </View>
            </OcultarTeclado>
    );
    
    
  

}// fin de Factorial

    const styles = StyleSheet.create({
        btnCalcular: {  // boton dentro del formulario
           // backgroundColor: '#1d3354',
           backgroundColor: colores.BG_COLOR,
            width:'65%',
            height: '20%',
            alignSelf: 'center',
            borderRadius : 7, 
            justifyContent:'center',
            marginTop: 15,
        },
        textBtnCalcular: {  // texto dentro del boton calcular
            justifyContent: 'center',
            marginHorizontal: 'auto',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 32,
            //color: '#18a999'
            color: colores.ENFASIS_COLOR
        },
        lblResultado:{
           color: '#d64045',
           fontSize: 30,
           fontWeight: 'bold',
           textAlign: 'center',
           marginVertical: '3%',
        },
        txtValores: // controles de textInput
        {
            alignSelf: 'center',
            marginTop: '10%',
            width: '85%',
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#18a999',
            lineHeight:24,
            fontSize: 18,
            color: '#d64045'
        },
        lblError: 
        {
            color: '#d64045',
           fontSize: 18,
           fontWeight: 'bold',
           textAlign: 'center',
      
        }
    });

