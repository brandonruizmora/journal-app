// Actions Const
const login = '[Auth] login';
const logout = '[Auth] logout';

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case logout:
            return {}
        default: return state;
    }
}

// Action Creators