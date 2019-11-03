import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Constants, Colors, Utils } from '@common'

import Splash from '../Scenes/Splash'

const IntroStack = createStackNavigator({
    Splash: { screen: Splash },
}, {
    headerMode: 'none',
    initialRouteName: 'Splash',
})

export default createAppContainer(IntroStack)
