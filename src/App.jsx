  import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import Header from './Header';
import Card from './Card';

function App() {
	const [albums, setAlbums] = useState([]);

	const URL = 'https://api.spotify.com/v1/browse/new-releases';
	const auth =
		'Authorization: Bearer BQCTmHmbUAkCC5Jhk4jWthEzArVY9H1kwmfDSyYPLDmJ2GgRnRD73WVLs1mjmCaDUJOPKaV11qgBmnu95-MpRiJJjApuCjeHNfYjuHU5KGH6XLDXLRVT2mdpDSfhViakjQgft--98Y_PeucTZ9JeLCJzonqYMyWOXlE';

	useEffect(async => {
		getData()
			.then(data =>
				data.albums.items.forEach(item => setAlbums(array =>             [...array, item])))
			.catch(error => console.log(error));
	}, []);

	async function getData() {
		const response = await fetch(URL, {
			method: 'GET',
			headers: {
				Authorization: auth
			},
			'Content-Type': 'application/json'
		});

		const data = await response.json();
		return data;
	}

  async function getMockData(){
    const response = await fetch('./albums.json', {
      headers: {
			'Content-Type': 'application/json'
		}
    });
    const data = await response.json();
    return data;
  }

	return (
		<main>
			<Header />
			<Card albums={albums} />
		</main>
	);
}

export default App;