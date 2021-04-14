import * as actionTypes from './actionTypes';
import axios from '../../axios-databaseApi';

export const bookingSuccess = (id, bookingData) => {
    return {
        type: actionTypes.BOOKING_SUCCESS,
        bookingID: id,
        bookingData: bookingData
    }
}

export const bookingFail = (error) => {
    return {
        type: actionTypes.BOOKING_FAILED,
        error: error
    }
}

export const bookingStart = () => {
    return {
        type: actionTypes.BOOKING_START
    }
}

export const book = (bookingData) => {
    return dispatch => {
        dispatch(bookingStart());
        axios.post('/bookings.json', bookingData) 
        .then(response => {
            dispatch(bookingSuccess(response.data, bookingData));
        })
        .catch(error => {
            dispatch(bookingFail(error));
        }) 
    }
}