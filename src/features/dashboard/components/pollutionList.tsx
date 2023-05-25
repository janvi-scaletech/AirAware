import { useEffect, useState } from 'react';
import pollutionData from 'assets/JSONDATA/pollutionData.json';

const PollutionList = () => {
	const pollutionList = pollutionData.data.sensors;

	//const fetchData = async () => {
	//	try {
	//		const response = await fetch(pollutionData as any);
	//		const data = await response;
	//	} catch (error) {
	//		console.error('Error fetching JSON:', error);
	//	}
	//};

	useEffect(() => {
		//pollutionData && fetchData();
	}, []);

	return (
		<div className='list-container'>
			<h3 className='mb--20 mt--30 text--center '>Air quality in Ahemadabad</h3>
			<div className='list-wrapper'>
				<div className='flex width--full justify-content--between mb--20'>
					{List.map((values: any, index) => {
						return (
							<p className='font-size--lg font--bold ' key={index}>
								{values}
							</p>
						);
					})}
				</div>
				{pollutionList.map((data: any, index) => {
					return (
						<div className='flex width--full justify-content--between' key={index}>
							<p>{data.location}</p>
							<p>{data.temperature}</p>
							<p>{data.severity}</p>
							<p>{data.longitude}</p>
							<p>{data.latitude}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const List = ['Location', 'Temperature', 'Severity', 'Longitude', 'Latitude'];

export default PollutionList;
