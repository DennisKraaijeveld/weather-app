export async function getWeatherData(req, cb) {
  const currentWeatherContainer = document.getElementById('card');

  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${req}&units=metric&appid=${process.env.OPEN_WEATHER_KEY}`,
      { mode: 'cors' }
    );
    const data = await response.json();

    const result = {
      city: data.name ?? null,
      country: data.sys.country ?? null,
      weather: {
        currentTemp: data.main.temp ?? null,
        feelTemp: data.main.feels_like ?? null,
        humidity: data.main.humidity ?? null,
        windSpeed: data.wind.speed ?? null,
        currentConditionMain: data.weather[0].main ?? null,
        currentConditionDesc: data.weather[0].description ?? null,
      },
    };

    currentWeatherContainer.append(cb(result));
  } catch (err) {
    console.log(err);
  }
}
