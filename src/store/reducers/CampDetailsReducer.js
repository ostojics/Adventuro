const initialState = {
    campDetails: {}
}

const campDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CAMP_CLICK':
            return {
                ...state,
                campDetails: {
                    ...action.payload
                }
            }
        default:
            return state;
    }
}

export default campDetailsReducer;