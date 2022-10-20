import React from 'react';
import {
          TouchableWithoutFeedback,
          Keyboard
        } from 'react-native';
 OcultarTeclado = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  export default OcultarTeclado;