// import axios
import axios from 'axios';

//set up action objects

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';

export const fetchSmurfs = (url) => {
    dispatch({ type: FETCH_SMURFS_START });
    axios.get(url)
        .then((res) => {
            //send data to success
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log("ERROR: ", err);
        })
}