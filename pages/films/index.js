import { getFilms } from "../../lib/films.js";
import Link from "next/link";

export async function getStaticProps() {
  const data = await getFilms();

  return {
    props: {
      data,
    },
  };
}

export default function Films({ data }) {
  return (
    <section>
      <h2>Films</h2>
      <ul>
        {data.results.map(({ title, episode_id }) => (
          <li key={title}>
            <Link href={`/films/${encodeURIComponent(episode_id)}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
