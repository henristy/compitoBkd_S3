import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import postSlice from '../slice/postSlice';
import {thunk} from 'redux-thunk';
import userSlice from '../slice/userSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    posts: postSlice,
    users: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'], // Ignore persist/PERSIST action
        },
    }).concat(thunk),
});

export const persistor = persistStore(store);

export default store;
