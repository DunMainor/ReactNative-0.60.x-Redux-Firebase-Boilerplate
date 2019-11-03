import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import * as ActionTypes from '@actions/ActionTypes'
import reducers from '@reducers'
import AppContainer from './AppContainer'


const middleware = [thunk]
const store = compose(applyMiddleware(...middleware))(createStore)(reducers)
const persistor = persistStore(store)

export default class RootRedux extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppContainer {...this.props} />
                </PersistGate>
            </Provider>
        )
    }
}
