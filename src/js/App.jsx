import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';

export default function App() {
	const [clickCount, setClickCount] = useState(0);

	useEffect(() => {
		document.getElementById("doboz").innerText = `Kattintások száma: ${clickCount}`;
	}, [clickCount]);

	return [
		<div className="h-screen m-auto flex flex-col items-center justify-center">
			<div id="doboz" className="border-4 rounded pointer-events-none select-none text-7xl mb-4" />
			<button
					className="border-4 bg-gray-600 rounded border-black text-6xl"
					onClick={() => {
						setClickCount(clickCount + 1);
					}}>
					Kattints
			</button>
		</div>
	];
}

createRoot(document.getElementById("root")).render(<App />);
