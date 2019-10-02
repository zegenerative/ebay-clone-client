export default function (state = '', action = {}) {
    switch(action.type) {
        case 'LOGIN':
            console.log(action.payload.jwt)
            return action.payload.jwt
        default: 
            return state
    }
}