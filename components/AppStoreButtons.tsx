type Props = {
  size?: "md" | "lg";
  className?: string;
};

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 814 1000"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.8 135.3-317.5 267.8-317.5 70.1 0 128.4 46.4 172.1 46.4 41.8 0 106.9-49.3 185.5-49.3zM620 132.4C654.4 94 679.5 40.9 679.5 0c0-6.4-.3-12.8-1.2-19.2-47.9 2.9-104.5 32.2-138.5 75.2C514.1 93.8 486.8 147.9 486.8 200c0 6.9.6 13.8 1.2 15.7 3.2.6 7.7 1.2 12.2 1.2 43.2 0 96.8-28.5 120-84.5z" />
    </svg>
  );
}

export default function AppStoreButtons({ size = "md", className = "" }: Props) {
  const isLg = size === "lg";
  const h = isLg ? "h-16" : "h-14";
  const px = isLg ? "px-6" : "px-5";
  const topText = isLg ? "text-[11px]" : "text-[10px]";
  const brandText = isLg ? "text-lg" : "text-base";

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href="https://apps.apple.com/app/docuvault/id-placeholder"
        className={`group flex items-center gap-3 ${h} ${px} rounded-xl bg-[#1C1C1E] text-white hover:bg-black transition-colors shadow-warm-md`}
        aria-label="App Store'dan indir"
      >
        <AppleLogo className={isLg ? "w-7 h-7" : "w-6 h-6"} />
        <div className="flex flex-col leading-tight">
          <span className={`${topText} text-white/70`}>App Store'dan</span>
          <span className={`${brandText} font-semibold tracking-tight`}>İndir</span>
        </div>
      </a>
    </div>
  );
}
