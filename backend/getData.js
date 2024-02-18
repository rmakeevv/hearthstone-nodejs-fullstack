const url =
  'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Warrior/?cost=5&locale=ruRU';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
};

export const getData = async () => {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
