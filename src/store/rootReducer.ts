import {combineReducers} from 'redux';
import {ProductsReducer, ProfileReducer} from './slices';

const rootReducer = combineReducers({
  profile: ProfileReducer,
  products: ProductsReducer,
});

export default rootReducer;
