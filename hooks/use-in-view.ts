import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element is on (or near) the screen via IntersectionObserver.
 * Used to pause WebGL render loops (frameloop) for off-screen scenes so only
 * the visible canvas renders. `rootMargin` pre-activates just before entry.
 * setState happens inside the observer callback (not synchronously in the
 * effect body), so it's safe under the React Compiler rules.
 */
export function useInView<T extends Element>(
  rootMargin = "250px",
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView];
}
