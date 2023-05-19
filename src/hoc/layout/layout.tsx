import { PropsWithChildren } from 'react';
import TopHeader from 'shared/navigation/topHedaer';

const Layout: React.FC<PropsWithChildren> = (props) => {
	return (
		<div id='wrapper'>
			<div id='page-wrapper' className='full--width'>
				<TopHeader />
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
