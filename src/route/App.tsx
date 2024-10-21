import { Portfolio } from "@/pages/Portfolio";
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import "@/css/app.css";
import * as React from 'react';

function App() {

	return (
		// <Router>
		// 	<div className="w-full h-full font-sans bg-cover bg-no-repeat bg-[url('/src/assets/bg-main.jpg')]">
		// 		<Routes>
		// 			<Route path="/" element={<Portfolio />} />
		// 			<Route path="*" element={<Navigate to="/" />} />
		// 		</Routes>
		// 	</div>
		// </Router>

		<div className="w-full h-full font-sans bg-cover bg-no-repeat bg-[url('/src/assets/bg-main.jpg')]">
			<Portfolio />
		</div>

	);
}

export default App;
