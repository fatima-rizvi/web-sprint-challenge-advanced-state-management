// import axios
import axios from 'axios';

//set up action objects

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const PUSH_SMURFS_START = 'PUSH_SMURFS_START';
export const PUSH_SMURFS_SUCCESS = 'PUSH_SMURFS_SUCCESS'

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });
    axios.get('http://localhost:3333/smurfs')
        .then((res) => {
            //send data to success
            console.log("Smurf data in axios call: ", res.data);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log("ERROR in fetch: ", err);
        })
}

export const pushSmurfs = (newSmurf) => (dispatch) => {
    dispatch({ type: PUSH_SMURFS_START });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then((res) => {
            dispatch({ type: PUSH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log("ERROR in pusg: ", err);
        })
}