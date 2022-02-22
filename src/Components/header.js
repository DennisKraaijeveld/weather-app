import { getWeatherData } from '../getWeatherData';
import ToggleButton from './toggleButton';

const Header = (leftCard) => {
  const mainHeader = document.createElement('div'),
    headerContainer = document.createElement('div'),
    navContainer = document.createElement('div'),
    navContent = document.createElement('div'),
    formContainer = document.createElement('div'),
    buttonContainer = document.createElement('div'),
    headerTitle = document.createElement('h1');

  mainHeader.className = 'header';
  headerContainer.className = 'header-container';
  navContainer.className = 'navigation';
  navContent.className = 'navigation-items';
  formContainer.className = 'form-container';
  buttonContainer.className = 'toggle-container';
  headerTitle.textContent = 'Weather';
  headerTitle.className = 'title';

  const celcius = document.createElement('span');
  celcius.textContent = '°C';
  const fahrenheit = document.createElement('span');
  fahrenheit.textContent = '°F';

  // Search Input
  const searchInput = document.createElement('input');

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const container = document.getElementById('card');
      const card = document.getElementById('weather-card');
      if (container.hasChildNodes()) {
        container.removeChild(card);
      }

      getWeatherData(searchInput.value, leftCard);
    }
  });

  const att = ['placeholder', 'type', 'name'];
  const value = ['Search Location...', 'text', 'search'];

  for (let i = 0; i < att.length; i++) {
    searchInput.setAttribute(att[i], value[i]);
  }

  searchInput.className = 'search-form';

  buttonContainer.append(celcius, ToggleButton(), fahrenheit);

  formContainer.append(searchInput, buttonContainer);

  navContent.append(headerTitle, formContainer);

  navContainer.appendChild(navContent);
  headerContainer.append(navContainer);
  mainHeader.appendChild(headerContainer);
  return mainHeader;
};

export default Header;
