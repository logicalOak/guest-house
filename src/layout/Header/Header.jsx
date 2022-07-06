import React from 'react';
import './Header.scss';
const Header = () => (
	<header className='header pl-2 pr-2'>
		<div className='header__inner flex flex-col items-center justify-center w-full gap-3 m-auto sm:flex-row sm:justify-beetween'>
			<a href='#' className='logo'>
				<img src='' alt='' />
			</a>
			<ul>
				<li>
					<a href='#'>Start</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
				<li>
					<a href='#'>Our history</a>
				</li>
			</ul>

			<a href='#'>Book now</a>
		</div>
	</header>
);

export default Header;
