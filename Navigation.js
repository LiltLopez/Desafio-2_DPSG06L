import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home                         from './screens/Home';
import  Suma                        from './screens/Suma';
import  Resta                      from './screens/Resta';
import  Multiplicacion              from './screens/Multiplicacion';
import  Division                    from './screens/Division';
import  Factorial                   from './screens/Factorial';
import  Raiz                        from './screens/Raiz';


import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import colores from './utils/colors';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
    <Tab.Navigator initialRouteName='Home' 
                   screenOptions={{
                       tabBarActiveTintColor: colores.ENFASIS_COLOR,
                       tabBarStyle:
                            {
                                backgroundColor: colores.BG_COLOR,
                                height:80,
                            },
                        tabBarIcon:
                            {
                                size:45
                            },
                        headerTitleStyle:{ // titulo de la pantalla
                                //color: colores.PRIMARY_COLOR,  // 
                                color: colores.ENFASIS_COLOR,
                                fontSize: 34,
                                marginLeft: 15
                            },
                        headerStyle:
                        {
                            backgroundColor: colores.BG_COLOR,
                        },
                        tabBarShowLabel: false,
                        
                       }} > 
        <Tab.Screen name="Home"             
                    component={Home} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon:
                        ({color,size})=>(
                        <Icon name='home' color={color} size={45} />
                        ),
                    }}
        />
        <Tab.Screen name="Suma"             
                    component={Suma} 
                    options={{
                        tabBarLabel: 'Suma',
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='plus' color={color} size={45} />
                        ),
                    }}
                    />
        <Tab.Screen name="Resta"            
                    component={Resta} 
                    options={{
                        tabBarLabel: 'Resta',
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='minus' color={color} size={45} />
                        ),
                    }}
        />
        <Tab.Screen name="Multiplicacion"   
                    component={Multiplicacion}
                     options={{
                        tabBarLabel: 'Multiplicacion',
                        tabBarIcon:
                        ({color,size})=>(
                        <Icon name='window-close' color={color} size={45} />
                        ),
                    }}/>
        <Tab.Screen name="Division"         
                    component={Division}
                    options={{
                        tabBarLabel: 'Division',
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='division' color={color} size={45} />
                        ),
                    }} />
        <Tab.Screen name="Factorial"        
                    component={    Factorial     }
                    options={{
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='alert-rhombus' color={color} size={45} />
                        ),
                    }} />
        <Tab.Screen name="Raiz Cuadrada"        
                    component={    Raiz     }
                    options={{
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='square-root-box' color={color} size={45} />
                        ),
                    }} />
    </Tab.Navigator>        
        );
}