const url =
  'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Warrior/?cost=5&attack=3&type=Minion&locale=ruRU';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd9d3764f7fmsh0d91d6032e19e35p191e0fjsnee3a896399e3',
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
