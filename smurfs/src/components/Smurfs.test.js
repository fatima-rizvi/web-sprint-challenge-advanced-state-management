import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Smurfs from './Smurfs'

describe('Tests if new smurfs display', () => {
    //Test that Smurfs renders
    test('Renders Smurfs without errors', () => {
        render (<App />)
        //render (<Smurfs />)
    })

})