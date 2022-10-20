import  React, {useEffect, useState } from 'react';
import { 
        View,
        Text,
        TouchableOpacity,
        StyleSheet,
        TextInput,
     }from 'react-native';
import OcultarTeclado from '../utils/OcultarTeclado';
import  colores  from '../utils/colors';

const FrmResta = (props) =>
{   
    const {setV1,setV2,operar} = props;
    return(
    <>
        <TextInput onChange={e=>{setV1(parseFloat(e.nativeEvent.text))}} style={styles.txtValores} placeholder="Primer valor"  keyboardType='numeric'/>
        <TextInput onChange={e=>{setV2(parseFloat(e.nativeEvent.text))}} style={styles.txtValores} placeholder="Segundo valor" keyboardType='numeric'/>
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

export default function Resta(props)
{   
    const [v1,setV1]                = useState(0);
    const [v2,setV2]                = useState(0);
    const [respuesta,setRespuesta]  = useState(0);
    const [error,setError]          = useState("");

    const{navigation} = props;
    useEffect(()=>
    {
        if((!v1 && !v2) || !v1 || !v2)
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
      }
      const operar = ()=>
    {   
          if(v1 && v2)
          {
            let r = v1 - v2;
            setRespuesta(r.toFixed(3));
            reset();
            
          }
          else
          {   
              reset();
              setError("Debe completar todos los datos");
          }
    }// fin de operar

        return(
            <OcultarTeclado>
                <View> 
                    <FrmResta setV1={setV1} setV2={setV2} operar={operar} />
                    <ResultArea respuesta={respuesta} error={error}/>   
                </View>
            </OcultarTeclado>
    );
    
    
  

}// fin de Resta

    const styles = StyleSheet.create({
        btnCalcular: {  // boton dentro del formulario
        //    backgroundColor: '#1d3354',
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
           // color: '#18a999'
           color:colores.ENFASIS_COLOR
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

