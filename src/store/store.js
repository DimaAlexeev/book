import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { booksReduse } from './redusers/booksRedus'
import { authorReduse } from './redusers/authorRedus'
import {composeWithDevTools } from 'redux-devtools-extension'

const Reduser = combineReducers({
    author:authorReduse,
    books:booksReduse
})
 
const loadState = () => {
    try {  
        const serialisedState = localStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};
const oldState = loadState();

export const store = createStore(Reduser,oldState,composeWithDevTools(applyMiddleware(thunk)));
 
 store.subscribe(() => { 
     const serialisedState = JSON.stringify(store.getState());
    localStorage.setItem('app_state', serialisedState);
});  
