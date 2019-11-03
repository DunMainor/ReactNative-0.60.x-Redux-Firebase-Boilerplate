import React, { Component } from 'react'
import { StyleProvider, Container } from 'native-base'
import { StatusBar, YellowBox } from 'react-native'
import Router from './Router'
import getTheme from '../../Theme/components'
import platform from '../../Theme/variables/platform'
import material from '../../Theme/variables/material'
import commonColor from '../../Theme/variables/commonColor'

import { Colors } from '@common'

export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    YellowBox.ignoreWarnings(['Require cycle:', 'Warning:'])
    this.state = {}
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Router />
      </StyleProvider>
    )
  }
}
