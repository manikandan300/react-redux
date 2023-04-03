import { configureStore,combineReducers } from "@reduxjs/toolkit"
import rootReducer  from "./StateReducer"

function todos(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([ action.text ])
      default:
        return state
    }
  }
  const rootred = combineReducers({
    rootReducer
  })
  
  let store = configureStore({reducer:rootred})
  
  store.dispatch({
      type: 'ADD_TODO',
      text: 'Read the docs'
    })
    
    console.log(store.getState())
    export default store;