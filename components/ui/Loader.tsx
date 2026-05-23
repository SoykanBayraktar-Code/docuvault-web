"use client";

/**
 * Branded loading overlay: a gold vault mark draws itself, then the forest
 * overlay fades out to reveal the page. Pure CSS (see globals.css) so it's
 * reliable and plays only on hard loads (it lives in the persistent layout,
 * so client-side route changes don't replay it). Reduced motion skips it.
 */
export default function Loader() {
  return (
    <div className="loader-overlay" aria-hidden>
      <svg className="loader-mark" viewBox="0 0 100 100" role="img" aria-label="DocuVault">
        <rect x="14" y="20" width="72" height="60" rx="10" pathLength={1} />
        <circle cx="50" cy="50" r="15" pathLength={1} />
        <line x1="50" y1="50" x2="50" y2="37" pathLength={1} />
      </svg>
    </div>
  );
}
