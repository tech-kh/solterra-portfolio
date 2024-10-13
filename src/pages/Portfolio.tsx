import works_bookreview from "@/assets/book-review-app.jpg";
import logo from "@/assets/solterra-logo.png";
import works_solterra from "@/assets/solterra-portfolio-site.jpg";
import works_thread from "@/assets/thread-app.jpg";
import { Header } from "@/components/Header";
import works_todo from "@/assets/todo.jpg";

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
				<div className="h-main text-center">
					<h2 className="text-6xl mt-6 mb-12 text-white font-bold">Works</h2>
					<div className="grid grid-cols-2 gap-x-6 gap-y-16">
						<img src={works_solterra} alt="solterra" />
						<img src={works_bookreview} alt="book-review" />
						<img src={works_thread} alt="thread-app" />
						<img src={works_todo} alt="todo-app" />
					</div>
				</div>
			</div>
		</div>
	);
};
