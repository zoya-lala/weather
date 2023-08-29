import React, { useEffect } from 'react';
import weaLoader from '../../assets/images/WeatherIcons.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { key, base } from '../../apiKey';

export const CurrentLocation = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, handleError);
		} else {
			// Geolocation is not supported by this browser
			alert('Geolocation is not supported by this browser.');
		}
	}, []);

	function showPosition(position) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		const url = `${base}weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// Navigate to the Weather component and pass the weather data as state data
				navigate('/weather', { state: { weatherData: data } });
			});
	}

	function handleError(error) {
		if (error.code === error.PERMISSION_DENIED) {
			// The user denied permission to access their location
			document.getElementById('locationInput').style.display = 'block';
		}
	}

	async function locationIsIncorrect(locationInput) {
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=d45b48d26595772ce1990068b35e36a6`;
		console.log(url);
		return fetch(url)
			.then((response) => response.json())
			.then((data) => {
				if (data.cod === '404') {
					console.log('if', data.cod);
					// Location not found
					return true;
				} else {
					console.log(data.cod);
					// Location found
					return false;
				}
			})
			.catch((error) => {
				// Handle error
				console.error(error);
				return true;
			});
	}

	const submitLocation = async (locationInput) => {
		if (!locationInput) {
			alert('Please enter a location');
		} else if (await locationIsIncorrect(locationInput)) {
			console.log('no');
			alert('The location entered is incorrect. Please try again.');
		} else {
			// const city = locationInput; // get this from user input
			const url = `${base}weather?q=${locationInput}&appid=${key}`;
			console.log(url);

			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					// Navigate to the Weather component and pass the weather data as state data
					console.log(data);
					navigate('/weather', { state: { weatherData: data } });
				});
		}
	};

	const customSizeStyles = {
		width: '32rem',
		height: '40rem',
	};

	return (
		<div className='page flex items-center justify-center h-screen bg-image-1 border border-solid border-red-950 '>
			<div
				className='bg-[#205aec] bg-opacity-20 shadow-lg rounded-lg p-[60px]'
				style={customSizeStyles}>
				<img
					src={weaLoader}
					alt={weaLoader}
					class='mt-[-60px]'
				/>
				<h3 className='font text-xl font-bold text-blue-900'>
					Detecting your location
				</h3>
				<br></br>
				<h3 className='text-lg'>
					Your current location wil be displayed on the App <br></br> & used for
					calculating Real time weather.
				</h3>
				<br></br>
				<div
					id='locationInput'
					className='hidden'>
					<input
						type='text'
						id='locationInputField'
						placeholder='Enter your location'
						class='flex-1 py-2 px-3 border border-gray-300 rounded-l-md'
					/>
					<button
						onClick={() =>
							submitLocation(
								document.getElementById('locationInputField').value
							)
						}
						className='py-2 px-3 bg-white border border-gray-300 border-l-0
						rounded-r-md cursor-pointer hover:bg-gray-100'>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</div>
		</div>
	);
};
