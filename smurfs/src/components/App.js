import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SmurfForm from '../components/SmurfForm';

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
      <h1>SMURFS! W/Redux</h1>
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
