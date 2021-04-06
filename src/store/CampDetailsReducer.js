const initialState = {
    campDetails: {}
}

const campDetailsReducer = (state = initialState, action) => {
    switch( action.type ) {
        case 'campClick':
            return {
                ...state,
                campDetails: {
                    ...action.payload
                }
            }
    }
}

export default campDetailsReducer;