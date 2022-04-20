export const fetchCityDataByName = async (cityName) => {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=0f94d07029c14eaeb1155820221904&q=" +
      cityName
  );
  const responseData = await response.json();

  const loadedCity = {
    id: Math.random().toString(),
    name: responseData.location.name,
    climate: responseData.current.condition.icon,
    temperature: responseData.current.temp_c,
    localtime: new Date(responseData.location.localtime),
  };

  return loadedCity;
};
