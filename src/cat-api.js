import Notiflix from 'notiflix';

const API_KEY =
  'live_10eYPfFUTe9qNDVcizIzAzYM7tO9d8zuq2wmyuQh0luil77WwUaqQ5eRF6Yzl1wb';

async function getBreeds() {
  try {
    const breeds = await fetch(
        `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`
      );
      return await breeds.json();
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
  }
}

async function getCat(id) {
  try {
    const breeds = await fetch(
      `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${id}`
    );
    return await breeds.json();
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  }
}

export {getBreeds, getCat};