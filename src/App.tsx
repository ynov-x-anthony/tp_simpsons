import Avatar from "./components/Avatar";

function App() {
	const bart = {
		image: "https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png",
		firstName: "Bart",
		lastName: "Simpson",
		nbDonuts: 0,
	};
	const homer = {
		image: "https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png",
		firstName: "Homer",
		lastName: "Simpson",
		nbDonuts: 4200,
	};

	return (
		<div className="App">
			{/* Composant pour Bart Simpson */}
			<Avatar
				image={bart.image}
				firstName={bart.firstName}
				lastName={bart.lastName}
				nbDonuts={bart.nbDonuts}
			/>
			{/* Composant pour Homer Simpson */}
			<Avatar
				image={homer.image}
				firstName={homer.firstName}
				lastName={homer.lastName}
				nbDonuts={homer.nbDonuts}
			/>
		</div>
	);
}

export default App;
