import { configureStore } from '@reduxjs/toolkit'
import reducers from './Reducers/index';

// const Store = configureStore({reducer: reducers});

const Store = configureStore({reducer: reducers}, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default Store;
