import { combineReducers } from 'redux';
import user from './user';
import sidebar from './sidebar';
import page from './page';

const App = combineReducers({
    user,
    sidebar,
    page,
});

export default App;
