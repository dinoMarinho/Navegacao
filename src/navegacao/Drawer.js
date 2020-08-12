import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import TelaD from '../views/TelaD'

// Cria a navegação do tipo Drawer
const Drawer = createDrawerNavigator()

export default props => (
    // Chama o componente de navegação do estilo Drawer usando suas propriedades
    <Drawer.Navigator initialRouteName="TelaD">
        <Drawer.Screen name="TelaA" component={TelaA}></Drawer.Screen>
        <Drawer.Screen name="TelaB" component={TelaB}></Drawer.Screen>
        <Drawer.Screen name="TelaC" component={TelaC}></Drawer.Screen>
        <Drawer.Screen name="TelaD" component={TelaD}></Drawer.Screen>
    </Drawer.Navigator>
)