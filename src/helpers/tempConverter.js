export function convertTemp(value, unit) {
  const temp = document.getElementById('temp');
  temp.innerHTML = '';

  switch (unit) {
    case 'celcius':
      let newValue = value * (9 / 5) + 32;
      return (temp.textContent = newValue + ' °F');
    case 'fahrenheit':
      let fahValue = (value - 32) * (5 / 9);
      return (temp.textContent = fahValue + ' °C');
    default:
      console.log('converting');
  }
}
