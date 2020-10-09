import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SmurfForm from '../components/SmurfForm';

import { fetchSmurfs } from '../actions/actions'

import "./App.css";

function App (props) {

  //const { fetchSmurfs } = props
  const [url, setUrl] = useState('http://localhost:3333/smurfs')
  useEffect(() => {
    fetchSmurfs(url);
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      {/* <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div> */}
      <SmurfForm />
    </div>
    );
  
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
