import "./App.css";
import Avatar from "./components/Avatar";

function App() {
	const theSimpsons = [
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png",
			firstName: "Bart",
			lastName: "Simpson",
			nbDonuts: 0,
		},
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png",
			firstName: "Homer",
			lastName: "Simpson",
			nbDonuts: 4200,
		},
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
			firstName: "Marge",
			lastName: "Simpson",
			nbDonuts: 2,
		},
	];

	return (
		<div className="App">
			{theSimpsons.map((simpson) => (
				<Avatar
					key={simpson.firstName}
					image={simpson.image}
					firstName={simpson.firstName}
					lastName={simpson.lastName}
					nbDonuts={simpson.nbDonuts}
				/>
			))}
		</div>
	);
}

export default App;
