import {legacy_createStore as createStore , combineReducers } from "redux";
import { counterReducer } from "./Counter/reducer";
import {todosReduser} from "./Todos/reducer";
const rootReducer =combineReducers({
    counter :counterReducer,
todos:todosReduser,
});

export const store =createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
console.log("state",store.getState());

// notification..........
// store.subscribe(()=>{
// console.log("subscribe",store.getState())
// })
