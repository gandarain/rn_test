import {ADD_DATA_USER, REMOVE_DATA_USER} from '../types'

export function addDataUser(data) {
	return {
	  type: ADD_DATA_USER,
	  data
	}
}

export function removeDataUser() {
	return {
	  type: REMOVE_DATA_USER
	}
}