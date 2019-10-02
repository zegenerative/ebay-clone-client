export default function (state = [], action = {}) {
    switch (action.type) {
        case 'ALL_ADVERTISEMENTS':
            return action.payload
        case 'NEW_ADVERTISEMENT':
            return [ action.payload, ...state ]
        default:
            return state
    }
}