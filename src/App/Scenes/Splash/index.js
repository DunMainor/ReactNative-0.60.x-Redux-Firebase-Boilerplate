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
import { Container } from 'native-base'
import { ActionCreators } from '@actions'

import { Images, Constants, Colors } from '@common'
import styles from './style'

class Splash extends Component {
    render = () => (
        <Container >
            <Image source={Images.AppLogo} style={styles.img_applogo} resizeMethod="scale" resizeMode="cover" />
        </Container>
    )

    componentDidMount = () => {    }
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
