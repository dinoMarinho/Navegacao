import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

// Cria a navegação do tipo Tab
const Tab = createBottomTabNavigator()

export default props => (
    // Chama o componente de navegação do estilo tab usando suas propriedades
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName
                // let iconName = 'ios-information-circle'

                switch (route.name){
                    case 'TelaA':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        break;
                    case 'TelaB':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        break;
                    case 'TelaC':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        break;
                }
               
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            showLabel: true
            // labelStyle: {fontSize: 30}
        }} initialRouteName="TelaB">

        <Tab.Screen name="TelaA" component={TelaA}></Tab.Screen>
        <Tab.Screen name="TelaB" component={TelaB}></Tab.Screen>
        <Tab.Screen name="TelaC" component={TelaC}></Tab.Screen>
    </Tab.Navigator>
)