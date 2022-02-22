import './style.css';
import { getWeatherData } from './getWeatherData';
import Header from './Components/header';
import leftCard from './Components/leftCard';
require('regenerator-runtime/runtime');
const pageLoad = (() => {
  const header = Header(leftCard);
  const mainContent = document.createElement('main');
  const currentWeatherContainer = document.createElement('div');
  currentWeatherContainer.setAttribute('id', 'card');

  mainContent.setAttribute('id', 'main');
  mainContent.className = 'main-content';
  currentWeatherContainer.className = 'weather-container';

  mainContent.append(currentWeatherContainer);
  document.body.append(header, mainContent);

  getWeatherData('Amsterdam', leftCard);
})();

export default pageLoad;
