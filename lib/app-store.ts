// App Store rating fetch — Apple iTunes Lookup API.
// Build-time + ISR (24h) cached. No auth needed.

const APP_ID = "6762083376";
const APP_STORE_URL = `https://apps.apple.com/tr/app/docuvault-belge-kasas%C4%B1/id${APP_ID}?l=tr`;

export type AppStoreRating = {
  average: number;
  count: number;
  version: string;
  url: string;
};

type ITunesResponse = {
  resultCount?: number;
  results?: Array<{
    averageUserRating?: number;
    userRatingCount?: number;
    averageUserRatingForCurrentVersion?: number;
    userRatingCountForCurrentVersion?: number;
    version?: string;
    trackViewUrl?: string;
  }>;
};

export async function getAppStoreRating(): Promise<AppStoreRating | null> {
  try {
    const r = await fetch(
      `https://itunes.apple.com/lookup?id=${APP_ID}&country=tr`,
      { next: { revalidate: 86400 } } // refresh every 24h on demand
    );
    if (!r.ok) return null;
    const data: ITunesResponse = await r.json();
    const app = data.results?.[0];
    if (!app) return null;

    const average = app.averageUserRating ?? 0;
    const count = app.userRatingCount ?? 0;
    if (average <= 0 || count <= 0) return null;

    return {
      average: Math.round(average * 10) / 10,
      count,
      version: app.version ?? "",
      url: app.trackViewUrl ?? APP_STORE_URL,
    };
  } catch {
    return null;
  }
}
