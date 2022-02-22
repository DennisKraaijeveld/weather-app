import { convertTemp } from '../helpers/tempConverter';

const ToggleButton = () => {
  let unit = 'celcius';

  const button = document.createElement('button'),
    innerBtn = document.createElement('span');

  button.className = 'toggle-btn';
  innerBtn.className = 'inner-btn';

  button.setAttribute('role', 'switch');
  button.setAttribute('aria-checked', 'false');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const temp = document.getElementById('temp').textContent;

    const getTemp = temp.substr(0, temp.indexOf(' '));
    innerBtn.classList.toggle('inner-btn-active');
    button.classList.toggle('toggle-btn-active');

    convertTemp(getTemp, unit);

    if (unit == 'celcius') {
      unit = 'fahrenheit';
    } else {
      unit = 'celcius';
    }
  });

  button.appendChild(innerBtn);

  return button;
};

export default ToggleButton;
