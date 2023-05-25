import airImage from 'assets/images/pexels-pixabay-459728.jpg';
import '../styles/dashboard.scss';
import PollutionList from '../components/pollutionList';
import SimpleMap from 'features/map/container/map';

const Dashboard = () => {
	return (
		<div className='dashboard-wrapper'>
			<div className='dashboard-container'>
				<h3 className='pt--50 title text--center'>Air Pollution: Everything You Need to Know </h3>
				<div className='display-flex-center'>
					<img className='air-image' src={airImage}></img>
				</div>
				<div className='content-wrapper mt--20' id='about'>
					<div className='text mb--30'>
						<h3 className=''>What Is Air Pollution?</h3>
						<p className='font-size--lg '>
							Air pollution refers to the release of pollutants into the air—pollutants which are
							detrimental to human health and the planet as a whole. According to the World Health
							Organization (WHO), each year air pollution is responsible for nearly seven million deaths
							around the globe. Nine out of ten human beings currently breathe air that exceeds the WHO’s
							guideline limits for pollutants, with those living in low- and middle-income countries
							suffering the most. In the United States, the Clean Air Act, established in 1970, authorizes
							the U.S. Environmental Protection Agency (EPA) to safeguard public health by regulating the
							emissions of these harmful air pollutants.
						</p>
					</div>
					<div className='text'>
						<h3 className=''>What Causes Air Pollution?</h3>
						<p className='font-size--lg '>
							“Most air pollution comes from energy use and production,” says John Walke, director of the
							Clean Air Project, part of the Climate and Clean Energy program at NRDC. “Burning fossil
							fuels releases gases and chemicals into the air.” And in an especially destructive feedback
							loop, air pollution not only contributes to climate change but is also exacerbated by it.
							“Air pollution in the form of carbon dioxide and methane raises the earth’s temperature,”
							Walke says. “Another type of air pollution, smog, is then worsened by that increased heat,
							forming when the weather is warmer and there’s more ultraviolet radiation.” Climate change
							also increases the production of allergenic air pollutants, including mold (thanks to damp
							conditions caused by extreme weather and increased flooding) and pollen (due to a longer
							pollen season). “We’ve made progress over the last 50 years improving air quality in the
							United States thanks to the Clean Air Act,” says Kim Knowlton, senior scientist and deputy
							director of the NRDC Science Center. “But climate change will make it harder in the future
							to meet pollution standards, which are designed to protect health.”
						</p>
					</div>
				</div>

				<div className='cards-wrapper'></div>
				<PollutionList />
				<div className='list-container'>
					<h3 className='mb--20 mt--30 text--center'>Pollution Hotspots</h3>
					<SimpleMap />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
