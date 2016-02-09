import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Redux has a single store. to reduce complexity it allows you to combine
// several 'reducer' functions that share this single state object.
// They are combined into one root reducer which is passed to the store,
// however for this app we only have one reducer.


// applyMiddleware takes createStore() and returns a new wrapped createStore
// note, this is an optional step to use middleware (we're auto console.log dispatches)
let createStoreWithMiddleware = applyMiddleware(logger)(createStore);


store = createStoreWithMiddleware(xoxoxoApp, initialState  = {}, 
    window.devToolsExtension ? window.devToolsExtension() : undefined);
