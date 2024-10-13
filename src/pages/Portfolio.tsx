import logo from "@/assets/solterra-logo.png";
import { Header } from "@/components/Header";
import { Works } from "@/components/Works";
import { GitHub } from "@/components/GitHub";

export const Portfolio = () => {
	return (
		<div className="w-full h-screen overflow-y-scroll">
			<div
				className={
					"transition-all fade-out flex justify-center items-center fixed "
				}
			>
				<img src={logo} alt="loading" />
			</div>
			<Header />
			<div className="w-3/4 h-auto mx-auto font-serif">
				<div id="home" className="h-main flex justify-center items-center">
					<h2 className="text-6xl font-bold text-white">
						Soltera Portfolio Site
					</h2>
				</div>
				<Works />
				<GitHub />
			</div>
		</div>
	);
};
