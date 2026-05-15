import { Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getAppStoreRating } from "@/lib/app-store";

type Props = {
  align?: "left" | "center";
};

const SHOW_COUNT_THRESHOLD = 5;

export default async function AppStoreBadge({ align = "left" }: Props) {
  const rating = await getAppStoreRating();
  if (!rating) return null;

  const t = await getTranslations("appStoreBadge");
  const formatter = new Intl.NumberFormat("tr-TR");
  const showCount = rating.count >= SHOW_COUNT_THRESHOLD;

  const justify =
    align === "center"
      ? "justify-center lg:justify-center"
      : "justify-center lg:justify-start";

  return (
    <div className={`mt-5 flex ${justify}`}>
      <a
        href={rating.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("ariaLabel", {
          rating: rating.average.toFixed(1),
          count: formatter.format(rating.count),
        })}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface ring-1 ring-border-warm shadow-warm-sm hover:shadow-warm-md hover:-translate-y-px transition-all text-xs"
      >
        <span className="flex items-center gap-0.5 text-secondary">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.round(rating.average) ? "fill-secondary" : ""
              }`}
              strokeWidth={1.5}
            />
          ))}
        </span>
        <span className="font-semibold text-text-primary tracking-tight">
          {rating.average.toFixed(1)}
        </span>
        {showCount && (
          <>
            <span className="text-text-tertiary">·</span>
            <span className="text-text-secondary">
              {t("count", { count: formatter.format(rating.count) })}
            </span>
          </>
        )}
        <span className="text-text-tertiary">·</span>
        <span className="text-text-secondary font-medium">App Store</span>
      </a>
    </div>
  );
}
