import React, { useState } from 'react';
import { connect } from 'react-redux';

const initialValues = {
    name: '',
    age: 0,
    height: ''
}

const SmurfForm = (props) => {

    const [values, setValues] = useState(initialValues)

    const handleChanges = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
            id: Math.random()
        });
    }   

    const resetForm = () => {
        setValues(initialValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        resetForm()
        
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label>Name: &nbsp;
                <input 
                    name = 'name'
                    type = 'text'
                    value = {values.name}
                    onChange = {handleChanges}
                />
            </label>
            <label>Age: &nbsp;
                <input 
                    name = 'age'
                    type = 'text'
                    value = {values.age}
                    onChange = {handleChanges}
                />
            </label>
            <label>Height: &nbsp;
                <input 
                    name = 'height'
                    type = 'text'
                    value = {values.height}
                    onChange = {handleChanges}
                />
            </label>
            <button>Add smurf</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {})(SmurfForm)