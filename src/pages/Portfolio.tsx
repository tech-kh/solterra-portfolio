import logo from "@/assets/solterra-logo.png";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";

export const Portfolio = () => {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 4000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="h-screen overflow-y-scroll">
			{loading && (
				<div
					className={
						"transition-all fade-out flex justify-center items-center fixed "
					}
				>
					<img src={logo} alt="loading" />
				</div>
			)}
			<Header />
			<div className="h-96">test1</div>
			<div className="h-96">test1</div>
			<div className="h-96">test1</div>
			<div className="h-96">test1</div>
			<div className="h-96">test1</div>
			<div className="h-96">test1</div>
			<div className="h-96">test1</div>
		</div>
	);
};
