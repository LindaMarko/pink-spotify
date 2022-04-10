import React from 'react';
import './App.css';
import 'fa-icons';

function Header() {
	return (
		<div className="header">
			<div className="logo">
				<div className="logo-icon">
					<fa-icon class="fas fa-record-vinyl"                      color="#e41984" size="50px"/>
				</div>
        <div className="logo-text">
          Pinkify
        </div>
			</div>
		</div>
	);
}

export default Header;
