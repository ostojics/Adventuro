import * as actionTypes from '../actions/actionTypes';

const initialState = {
    bookings: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.BOOKING_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.BOOKING_SUCCESS:
            const newBooking = {
                ...action.bookingData,
                id: action.bookingID
            }

            return {
                ...state,
                loading: false,
                bookings: state.bookings.concat(newBooking)
            }

        case actionTypes.BOOKING_FAILED:
            return { 
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state;
    }
}

export default reducer;