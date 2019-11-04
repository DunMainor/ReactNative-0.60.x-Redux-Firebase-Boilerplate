import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = StyleSheet.create({
    img_applogo:{
        width: width * 0.3,
        height: width * 0.3,
        alignSelf:'center',
        marginTop:height * 0.15,
    },
    icn_smiley:{
        fontSize: Utils.scaledSize(150),
        alignSelf:'center',
        marginTop: height * 0.1,
    },
    container:{
        alignContent:'center',
    },
    txt_app_name:{
        alignSelf: 'center',
        fontSize: Utils.scaledSize(20),
        fontWeight:'500',
        marginTop: height * 0.025,
    },
})

export default styles
