import works_bookreview from "@/assets/book-review-app.jpg";
import works_solterra from "@/assets/solterra-portfolio-site.jpg";
import works_thread from "@/assets/thread-app.jpg";
import works_todo from "@/assets/todo.jpg";
import * as React from 'react';

export const Works = () => {
	return (
		<div id="works" className="h-main text-center">
			<h2 className="text-6xl mt-6 mb-12 text-white font-bold">Works</h2>
			<div className="grid grid-cols-2 gap-x-6 gap-y-16">
				<img src={works_solterra} alt="solterra" />
				<img src={works_bookreview} alt="book-review" />
				<img src={works_thread} alt="thread-app" />
				<img src={works_todo} alt="todo-app" />
			</div>
		</div>
	);
};
