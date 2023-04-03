const API_KEY = "8635c5bb837de30ade8b0c30541f7d70";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const weatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);

  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
};

const currentData = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: detail, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    detail,
    icon,
    speed,
  };
};

const getWeatherData = async (searchParams) => {
  const getcurrentData = await weatherData("weather", searchParams).then(
    currentData
  );
  return getcurrentData;
};


export default getWeatherData;
