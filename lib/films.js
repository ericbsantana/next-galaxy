import { url } from "../config/api";

export async function getFilms() {
  const res = await fetch(`${url}/api/films/`);
  const data = await res.json();

  return data;
}

export async function getFilmsIds() {
  const res = await fetch(`${url}/api/films/`);
  const data = await res.json();

  return data.results.map((movie) => {
    return {
      params: {
        id: movie.episode_id.toString(),
      },
    };
  });
}

export async function getFilmDetails(id) {
  const res = await fetch(`${url}/api/films/${id}`);
  const details = await res.json();

  const characters = await Promise.all(
    details.characters.map((character) => fetch(character))
  )
    .then((resp) =>
      Promise.all(
        resp.map((r) => {
          return r.json();
        })
      )
    )
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });

  const starships = await Promise.all(
    details.starships.map((starship) => fetch(starship))
  )
    .then((resp) =>
      Promise.all(
        resp.map((r) => {
          return r.json();
        })
      )
    )
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });

  const planets = await Promise.all(
    details.planets.map((planet) => fetch(planet))
  )
    .then((resp) =>
      Promise.all(
        resp.map((r) => {
          return r.json();
        })
      )
    )
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });

  const vehicles = await Promise.all(
    details.vehicles.map((vehicle) => fetch(vehicle))
  )
    .then((resp) =>
      Promise.all(
        resp.map((r) => {
          return r.json();
        })
      )
    )
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });

  const species = await Promise.all(
    details.species.map((species) => fetch(species))
  )
    .then((resp) =>
      Promise.all(
        resp.map((r) => {
          return r.json();
        })
      )
    )
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return { details, characters, species, vehicles, starships, planets };
}
