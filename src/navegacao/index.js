import React from 'react'
import { SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Stack from './Stack'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        {/* Cria nossa area de navegação */}
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
)