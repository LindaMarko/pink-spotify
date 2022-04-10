import React from 'react';
import { useState } from 'react';
import './App.css';
import 'fa-icons';

function PlayButton(props) {
	const [activeButton, setActiveButton] = useState(null);

	return (
		<>
			<fa-icon
				class="fas fa-play" size="70px"
				color={activeButton == props.buttonKey ? '#e41984' : '#888888'}
			onMouseEnter={() => setActiveButton(props.buttonKey)}
				onMouseLeave={() => setActiveButton(null)}
				>
			</fa-icon>
		</>
	);
}

export default PlayButton;
