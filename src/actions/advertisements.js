import request from 'superagent'

export const ALL_ADVERTISEMENTS = 'ALL_ADVERTISEMENTS'

const baseUrl = 'http://localhost:4000'
// const baseUrl = 'https://shrouded-ravine-78527.herokuapp.com'

function allAdvertisements (payload) {
  return {
    type: ALL_ADVERTISEMENTS,
    payload
  }
}

export const getAdvertisements = () => (dispatch, getState) => {
  const state = getState()
  const { advertisements } = state

  if (!advertisements.length) {
    request(`${baseUrl}/advertisement`)
      .then(response => {
        const action = allAdvertisements(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

export const ONE_ADVERTISEMENT = 'ONE_ADVERTISEMENT'

function oneAdvertisement (payload) {
  return {
    type: ONE_ADVERTISEMENT,
    payload
  }
}

export const getAdvertisement = (id) => (dispatch) => {
  request(`${baseUrl}/advertisement/${id}`)
    .then(response => {
      console.log("HELLO", response)
      const action = oneAdvertisement(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

//create action creator to dispatch login credentials:
// export const LOGIN = 'LOGIN'

// function credentials (payload) {
//     return {
//         type: LOGIN,
//         payload
//     }
// }

//data = 'email','password'
// export const login = (email, password) => dispatch => {
//   request
//     .post(`${baseUrl}/login`)
//     .send({email, password})
//     .then(response => {
//         const action = credentials(response.body)
//         dispatch(action)
//     })
//     .catch(console.error)
// }

export const NEW_ADVERTISEMENT = 'NEW_ADVERTISEMENT'

function newAdvertisement (payload) {
  return {
    type: NEW_ADVERTISEMENT,
    payload
  }
}

export const createAdvertisement = data => (dispatch, getState) => {
    console.log('from the action creator createAdvertisment: ', data)
    // const state = getState()
    // const { user } = state
    request
        .post(`${baseUrl}/advertisement`)
        // .set('Authorization', `Bearer ${user}`)
        .send(data)
        .then(response => {
            const action = newAdvertisement(response.body)
        dispatch(action)
    })
    .catch(console.error)
}