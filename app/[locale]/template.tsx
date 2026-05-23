/**
 * Per-navigation template: remounts on every route change, so the CSS
 * `.page-enter` fade replays. Opacity-only (no transform) to avoid creating a
 * containing block that would break the sticky navbar. No-JS / reduced-motion
 * safe — the content is visible without the animation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
