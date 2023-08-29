import './App.css';
import {
	CurrentLocation,
	Weather,
	WeatherEffects,
	WeatherIcon,
} from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={<CurrentLocation />}
					exact
				/>
				<Route
					path='/weather'
					element={<Weather />}
					exact
				/>
			</Routes>
		</div>
	);
}

export default App;
