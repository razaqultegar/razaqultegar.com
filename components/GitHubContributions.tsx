import { getContributions, type ContributionDay } from "@/lib/github";

const levelColor: Record<ContributionDay["level"], string> = {
  0: "bg-ink/10",
  1: "bg-[#9be9a8]",
  2: "bg-[#40c463]",
  3: "bg-[#30a14e]",
  4: "bg-[#216e39]",
};

const levels = [0, 1, 2, 3, 4] as const;

export default async function GitHubContributions() {
  const contributions = await getContributions();
  if (!contributions) return null;

  return (
    <figure>
      <div
        className="grid grid-flow-col grid-rows-7 gap-0.5"
        style={{
          gridTemplateColumns: `repeat(${contributions.weeks.length}, minmax(0, 1fr))`,
        }}
      >
        {contributions.weeks
          .flat()
          .map((day, index) =>
            day ? (
              <div
                key={day.date}
                title={`${day.count} kontribusi pada ${day.date}`}
                className={`aspect-square rounded-[2px] ${levelColor[day.level]}`}
              />
            ) : (
              <div key={`pad-${index}`} />
            ),
          )}
      </div>
      <figcaption className="text-ink/70 mt-2 flex items-center justify-between text-sm">
        <span>
          {contributions.total.toLocaleString("id-ID")} kontribusi dalam setahun
          terakhir
        </span>
        <span className="flex items-center gap-1">
          Sedikit
          {levels.map((level) => (
            <span
              key={level}
              className={`size-2.5 rounded-[2px] ${levelColor[level]}`}
            />
          ))}
          Banyak
        </span>
      </figcaption>
    </figure>
  );
}
