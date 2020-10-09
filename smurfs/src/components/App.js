import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SmurfForm from '../components/SmurfForm';
import Smurfs from '../components/Smurfs'

import { fetchSmurfs } from '../actions/actions'

import "./App.css";

function App (props) {

  //const { fetchSmurfs } = props
  //const [url, setUrl] = useState('http://localhost:3333/smurfs')
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Smurf Village!</h1>
      <SmurfForm />
      <Smurfs />
      {/* {props.smurfs.map((smurf) => (
        <h1 key={smurf.id}>{smurf.name}</h1>
      ))} */}
    </div>
    );
  
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
