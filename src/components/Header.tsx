import logo from "@/assets/solterra-logo.png";
import { Button } from "@/components/ui/button";

export const Header = () => {
	return (
		<div className="w-full h-16 bg-white flex items-center space-x-1">
			<img src={logo} alt="logo" className="max-h-16 mt-3" />
			<Button variant="link" className="text-xl italic text-sky-500 ">
				<a href="#home">Home</a>
			</Button>
			<Button variant="link" className="text-xl italic text-sky-500">
				<a href="#works">Works</a>
			</Button>
			<Button variant="link" className="text-xl italic text-sky-500">
				<a href="#test">GitHub</a>
			</Button>
			<Button variant="link" className="text-xl italic text-sky-500">
				<a href="#test">About</a>
			</Button>
		</div>
	);
};
