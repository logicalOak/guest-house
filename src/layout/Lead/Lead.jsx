import './Lead.scss';

const Lead = () => (
	<section className='lead'>
		<div className='lead__row text-center pr-2 pl-2'>
			<h2 className='lead__title relative w-full m-auto'>
				The Guest House is the perfect weekend getaway cabin.
			</h2>
		</div>
		<img
			className='lead__image w-full m-auto'
			src='/assets/images/lead/image.jpg'
			alt='The Guest House'
		/>
	</section>
);

export default Lead;
