import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const Login = lazy(() => import("./pages/Login"));
const CampgroundPage = lazy(() => import("./pages/ShowCampground"));
const CreateCampgroundPage = lazy(() => import("./pages/NewCampground"));
const CampgroundsIndexPage = lazy(() => import("./pages/CampgroundsIndex"));

function App() {
	return (
		<Router>
			<Navbar />
			<Suspense fallback={<h1>Loading</h1>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/campgrounds" element={<CampgroundsIndexPage />} />
					<Route path="/campgrounds/new" element={<CreateCampgroundPage />} />
					<Route path="*" element={<h1>404</h1>} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
