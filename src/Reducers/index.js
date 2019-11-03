import { persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import AuthReducer from './Auth'

const config = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['AuthReducer'],
}

const reducers = persistCombineReducers(config, {
    AuthReducer,
})

export default reducers
