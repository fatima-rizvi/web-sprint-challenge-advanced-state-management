import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render } from './renderForTests'
import { screen, fireEvent } from '@testing-library/react';
import App from '../../containers/App'

it('Renders the connected app with initialState', () => {
  render(<App />, { initialState: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ]; })

  expect(screen.getByText(/brainey/i)).toBeInTheDocument()
})

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';
// import Smurfs from './Smurfs'

// test('Renders App without errors', () => {
//     render (<App />)
//     //render (<Smurfs />)
// })

// import React from 'react';
// import { Provider } from 'react-redux';
// //import renderer from 'react-test-renderer';
// import { render, screen, fireEvent } from '@testing-library/react';
// import configureStore from 'redux-mock-store';
 
// import Smurfs from './Smurfs';
 
// const mockStore = configureStore([]);
 
// describe('Smurfs', () => {
//   let store;
//   let Smurfs;
 
//   beforeEach(() => {
//     store = mockStore({
//       myState: 'sample text',
//     });
 
//     component = renderer.create(
//       <Provider store={store}>
//         <Smurfs />
//       </Provider>
//     );
//   });
 
//   it('should render with given state from Redux store', () => {
 
//   });
 
//   it('should dispatch an action on button click', () => {
 
//   });
});