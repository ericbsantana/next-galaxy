import Head from "next/head";

export default function Layout({ children, title, type }) {
  return (
    <div>
      <Head>
        <title>Next Galaxy | {title} </title>
        <meta name="og:title" content={title} />
        {type === "movie" && (
          <meta
            name="description"
            content={`Know more about '${title}' movie here in Next Galaxy.`}
          />
        )}
        {type === "character" && (
          <meta
            name="description"
            content={`Know more about '${title}' character here in Next Galaxy.`}
          />
        )}
        {type === "planet" && (
          <meta
            name="description"
            content={`Know more about '${title}' planet here in Next Galaxy.`}
          />
        )}
        {type === "starship" && (
          <meta
            name="description"
            content={`Know more about '${title}' starship here in Next Galaxy.`}
          />
        )}
      </Head>
      {children}
    </div>
  );
}
