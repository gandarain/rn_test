import {ADD_DATA_USER, REMOVE_DATA_USER} from '../types'

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  photo: ''
}

function addUserReducer(state, action) {
  const setState = state || initialState
  switch (action.type) {
    case ADD_DATA_USER:
      return {
        ...setState,
        [action.data.name]: action.data.value
      }

    case REMOVE_DATA_USER:
      return {
        firstName: '',
        lastName: '',
        age: '',
        photo: ''
      }
    
    default:
      return setState
  }
}

export default addUserReducer