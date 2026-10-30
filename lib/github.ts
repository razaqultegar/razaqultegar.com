export const githubUsername = "razaqultegar";

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type Contributions = {
  total: number;
  weeks: (ContributionDay | null)[][];
};

export async function getContributions(): Promise<Contributions | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`,
      { next: { revalidate: 60 * 60 * 24 } },
    );
    if (!res.ok) return null;

    const data: {
      total: { lastYear: number };
      contributions: ContributionDay[];
    } = await res.json();

    // Pad the first week so every column starts on Sunday, like GitHub's graph.
    const firstDay = new Date(data.contributions[0].date).getUTCDay();
    const days = [...Array(firstDay).fill(null), ...data.contributions];
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

    return { total: data.total.lastYear, weeks };
  } catch {
    // A flaky third-party API shouldn't break the build.
    return null;
  }
}
