import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

// Cria a navegação do tipo stack
const Stack = createStackNavigator()

export default props => (
    // Cria um componente de navegação e define a rota inicial do app
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{
        headerShown: true
    }}>
        {/* Cria as telas de nvaegação e suas opções*/}
        <Stack.Screen name="TelaA" options={{title: 'Informações Iniciais'}}>
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <PassoStack {...props} avancar="TelaC" voltar avancarParams={{numero: 1007}} >
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoStack {...props} voltar>
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>

    </Stack.Navigator>
)