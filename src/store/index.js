import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import { rootReducer } from "./root-reducer";
import * as api from "../config";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["theme"], // <<< Указываем, что сохранять нужно ТОЛЬКО 'theme'
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(
            thunk.withExtraArgument({
                client: axios,
                api,
            })
        )
    )
);

const persister = persistStore(store);

export { store, persister };
