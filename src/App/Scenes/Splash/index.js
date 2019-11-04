import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    StatusBar,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SplashScreen from 'react-native-splash-screen'
import { Container, Icon } from 'native-base'
import { ActionCreators } from '@actions'

import { Images, Constants, Colors } from '@common'
import styles from './style'

class Splash extends Component {
    state = {
        current_emoji:0,
        icons: ['emoticon-cool', 'emoticon-cool-outline', 'emoticon-excited', 'emoticon-excited-outline', 'emoticon-kiss', 'emoticon-kiss-outline', 'emoticon-tongue','emoticon-tongue-outline'],
    }
    render = () => (
        <Container style={styles.container} >
            <Image source={Images.AppLogo} style={styles.img_applogo} resizeMethod="scale" resizeMode="cover" />
            <Text style={styles.txt_app_name}>React Native Boilerplate</Text>
            <Icon name={this.state.icons[this.state.current_emoji]} type="MaterialCommunityIcons" color={Colors.Black} style={styles.icn_smiley} />
        </Container>
    )

    componentDidMount = () => {
        SplashScreen.hide()
        setInterval(() => {
            if (this.state.current_emoji === 7){
                this.setState({current_emoji:0})
            } else {
                this.setState({current_emoji: this.state.current_emoji + 1})
            }
        }, 1000);
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Splash)
