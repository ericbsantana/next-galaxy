import { getFilmsIds, getFilmDetails } from "../../lib/films.js";
import Link from "next/link";
import Layout from "../../components/layout";

export async function getStaticProps({ params }) {
  const { details, characters, species, vehicles, starships, planets } =
    await getFilmDetails(params.id);

  return {
    props: {
      details,
      characters,
      species,
      vehicles,
      starships,
      planets,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getFilmsIds();
  return {
    paths,
    fallback: true,
  };
}

const MovieDetails = ({
  details,
  characters,
  species,
  vehicles,
  starships,
  planets,
}) => {
  return (
    <Layout title={details.title} type="movie">
      <div>
        <p>Title: {details.title}</p>
        {characters.map((character) => (
          <p key={character.name}>{character.name}</p>
        ))}
      </div>
    </Layout>
  );
};

export default MovieDetails;
