import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from '../actions/actions'

// set up initial state
const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
    newSmurf: {}
};

const reducer = ( state = initialState, action) => {
    switch( action.type ){
        case FETCH_SMURFS_START:
            console.log("running FETCH_SMURFS_START");
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SMURFS_SUCCESS:
            console.log('running FETCH_SMURFS_SUCCESS');
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        default:
            return state;
    };
};

export default reducer;
