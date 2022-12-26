import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createRoot } from "react-dom/client";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
