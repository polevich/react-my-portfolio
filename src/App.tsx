import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Contact } from './layout/sections/contacts/Contact';
import { Abouts } from './layout/sections/abouts/Abouts';
import { Footer } from './layout/footer/Footer';
import { Stacks } from './layout/sections/stacks/Stacks';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';


function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Abouts />
			<Stacks />
			<Projects />
			<Contact />
			<Footer />
			<GoTopBtn />
		</div>
	);
}

export default App;

