const TopHeader = () => {
	return (
		<div className='topheader-wrapper flex-space--between'>
			<div className='header justify-content--between flex width--full'>
				<div className='flex justify-content--start align-items--center width--50 font-size--30 line-height--28 font--semi-bold cursor--pointer'>
					AirAware
				</div>
				<div className='width--50 flex justify-content--end pr--40'>
					<ul className='flex navbar align-items--center'>
						<li className='cursor--pointer'>About</li>
						<li className='cursor--pointer'>Articles</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
