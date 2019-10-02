export default function (state = {}, action = {}) {
    switch (action.type) {
        case 'ONE_ADVERTISEMENT':
            return action.payload
        default:
            return state
    }
}