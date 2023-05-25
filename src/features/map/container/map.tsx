import GoogleMapReact from 'google-map-react';
import { useEffect, useRef } from 'react';
import pollutionData from 'assets/JSONDATA/pollutionData.json';

interface IMarker {
	lat: any;
	lng: any;
	text: string;
	id?: string;
	location?: string;
	latitude?: number;
	longitude?: number;
	pm25?: number;
	co?: number;
	severity?: string;
	sensor_name?: string;
	sensor_type?: string;
	installation_date?: string;
	temperature?: number;
}

const SimpleMap = () => {
	const pollutionList = pollutionData.data.sensors;

	const Marker = (data: IMarker) => {
		const { text } = data;
		return (
			<div
				style={{
					color: 'red',
					background: 'red',
					padding: '5px 10px',
					width: '2px',
					height: '2px'
				}}
			>
				<p>{text}</p>
			</div>
		);
	};

	const defaultProps = {
		center: {
			lat: 23.0225,
			lng: 72.5714
		},
		zoom: 11
	};

	return (
		<div style={{ height: '500px', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: '' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				{pollutionList.length > 0 &&
					pollutionList.map((markerData) => (
						<Marker
							key={markerData.id}
							lat={markerData.latitude}
							lng={markerData.longitude}
							text={markerData.location}
						/>
					))}
			</GoogleMapReact>
		</div>
	);
};

export default SimpleMap;
