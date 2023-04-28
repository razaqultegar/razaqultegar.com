import Page from "@components/page";
import Entry from "@components/entry";

// Data
import { data as items } from "@data/playlist.json";

const Playlist = () => {
  return (
    <Page title="Playlist" description="Koleksi playlist musik andalan.">
      <article>
        {items.map((entry) => {
          return (
            <Entry
              key={entry.title}
              title={entry.title}
              image={entry.image}
              href={entry.url}
              description={entry.description}
            />
          );
        })}
      </article>
    </Page>
  );
};

export default Playlist;
