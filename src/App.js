import logo from './logo.svg';
import './App.css';
import {configureStore,combineReducers } from '@reduxjs/toolkit';
import reducer from './StateReducer'

import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      
      <MyComponent></MyComponent>
    </div>
  );
}


export default App;
