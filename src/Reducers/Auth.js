import * as ActionTypes from '@actions/ActionTypes'

export default function base(state = {}, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return { ...state }
        default:
            return { ...state }
    }
}
