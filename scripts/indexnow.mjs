// IndexNow submitter — notifies Bing, Yandex, Seznam and AI search engines
// (Copilot, etc.) of our URLs the moment they change. No account needed:
// the key file at public/<key>.txt proves we own the host.
//
// Google does NOT participate in IndexNow — Google indexing still goes through
// Search Console. This covers everything else.
//
// Run after a production deploy (so the key file + sitemap are live):
//   node scripts/indexnow.mjs
// The GitHub Action (.github/workflows/indexnow.yml) runs it automatically on
// every push to main.

const HOST = "www.appdocuvault.com";
const KEY = "a13ac8b129c038d38d4c6ce984af07f4";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;

async function getUrls() {
  const res = await fetch(SITEMAP, {
    headers: { "User-Agent": "docuvault-indexnow" },
  });
  if (!res.ok) throw new Error(`sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].trim()
  );
  return [...new Set(urls)].filter((u) => u.includes(HOST));
}

async function main() {
  const urlList = await getUrls();
  if (!urlList.length) throw new Error("no URLs found in sitemap");
  console.log(`Submitting ${urlList.length} URLs to IndexNow…`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  // IndexNow returns 200 (OK) or 202 (Accepted) on success.
  console.log(`IndexNow response: ${res.status} ${res.statusText}`);
  if (res.status !== 200 && res.status !== 202) {
    console.error(await res.text().catch(() => ""));
    process.exit(1);
  }
  console.log("Submitted:");
  for (const u of urlList) console.log("  " + u);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
