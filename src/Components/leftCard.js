import { format } from 'date-fns';
import { convertTemp } from '../helpers/tempConverter';
const leftCard = (result) => {
  const card = document.createElement('div'),
    cardContainer = document.createElement('div'),
    weatherCondition = document.createElement('h2'),
    city = document.createElement('h2'),
    currentDate = document.createElement('div'),
    currentTime = document.createElement('div'),
    currentTemp = document.createElement('div');

  cardContainer.className = 'card-container';
  weatherCondition.className = 'condition-title';
  city.className = 'current-city';
  currentDate.className = 'current-date';
  currentTime.className = 'current-time';
  currentTemp.className = 'current-temp';
  currentTemp.setAttribute('id', 'temp');

  const displayTemp = Math.floor(result?.weather?.currentTemp ?? null);
  var today = format(new Date(), 'EEEE, d MMM yy');

  weatherCondition.textContent = result?.weather?.currentConditionMain ?? null;
  currentTemp.textContent = displayTemp + ' °C';

  city.textContent = result?.city;
  currentDate.textContent = today;

  card.className = 'card';
  card.setAttribute('id', 'weather-card');

  cardContainer.append(
    weatherCondition,
    city,
    currentDate,
    currentTime,
    currentTemp
  );

  card.appendChild(cardContainer);
  return card;
};

export default leftCard;
