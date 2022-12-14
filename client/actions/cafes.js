import { addCafe, getCafes } from '../apis/cafes'

export const SET_CAFES = 'SET_CAFES'

export function setCafes(cafes) {
  return {
    type: SET_CAFES,
    payload: cafes,
  }
}

export function fetchCafes() {
  return (dispatch) => {
    return getCafes().then((cafes) => {
      dispatch(setCafes(cafes))
    })
  }
}

export function addMoreCafe(newCafe, token) {
  return (dispatch) => {
    return addCafe(newCafe, token).then((cafes) => {
      dispatch(setCafes(cafes))
    })
  }
}
