import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

// Cria a navegação do tipo Tab
const Tab = createBottomTabNavigator()

export default props => (
    // Chama o componente de navegação do estilo tab usando suas propriedades
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: {fontSize: 30}
    }} initialRouteName="TelaB">
        <Tab.Screen name="TelaA" component={TelaA}></Tab.Screen>
        <Tab.Screen name="TelaB" component={TelaB}></Tab.Screen>
        <Tab.Screen name="TelaC" component={TelaC}></Tab.Screen>
    </Tab.Navigator>
)