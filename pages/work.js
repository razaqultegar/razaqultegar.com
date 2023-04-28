import Page from "@components/page";
import Entry from "@components/entry";
import TextEntry from "@components/entry/text";

// Data
import { data } from "@data/work.json";

const Work = () => {
  const imageItems = data.filter((x) => x.image);
  const nonImageItems = data.filter((x) => !x.image);

  return (
    <Page title="Kerjaan" description="Koleksi karya masa lalu dan masa kini.">
      <article>
        {imageItems.map((entry) => {
          return (
            <Entry
              key={`${entry.title}-${entry.url}`}
              title={entry.title}
              image={entry.image}
              href={entry.url}
              type={entry.key}
              description={entry.description}
            />
          );
        })}

        {nonImageItems.map((entry) => {
          return (
            <TextEntry
              key={`${entry.title}-${entry.url}`}
              title={entry.title}
              image={entry.image}
              href={entry.url}
              type={entry.key}
              description={entry.description}
            />
          );
        })}
      </article>
    </Page>
  );
};

export default Work;
