import App from "@/route/App";
import {hydrateRoot} from "react-dom/client";

const rootElement = document.getElementById("root");

hydrateRoot(
	  document.getElementById("root") as HTMLElement,
		<App />
)
