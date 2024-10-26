import { Portfolio } from "@/pages/Portfolio";
import "@/css/app.css";
import * as React from 'react';
import bgImage from "@/assets/bg-main.jpg";

function App() {

	return (
		<div className={`w-full h-full font-sans bg-cover bg-no-repeat`}
		style={{backgroundImage: `url(${bgImage})`}}>
			<Portfolio />
		</div>

	);
}

export default App;
