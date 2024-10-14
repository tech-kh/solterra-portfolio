import github from "@/assets/github.jpg";

export const GitHub = () => {
	return (
		<div id="github" className="h-main text-center">
			<h2 className="text-6xl mt-36 mb-12 text-white font-bold">GitHub</h2>
			<div className="grid grid-cols-1 gap-x-6 gap-y-16">
				<img src={github} alt="github" />
			</div>
		</div>
	);
};
