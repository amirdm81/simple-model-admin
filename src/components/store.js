import {createStore} from 'redux';
import reducers from './reducers';
import { getLocalState, setLocalState } from './helpers';


const store = createStore(reducers,
    getLocalState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    
store.subscribe(() => {
    setLocalState();
});
export default store;