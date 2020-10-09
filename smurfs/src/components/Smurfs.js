import React from 'react';
import { connect } from 'react-redux';

const Smurfs = (props) => {
    return (
        <div className = 'smurfDisplay'>
            <h2>Meet the smurfs!</h2>
            <div className = 'allSmurfs'>
                {props.smurfs.map((smurf) => (
                    <div className = 'smurf' key = {smurf.id}>
                        <h3>{smurf.name}</h3>
                        <h6>{smurf.age}</h6>
                        <h6>{smurf.height}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurfs)