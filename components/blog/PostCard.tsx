import { Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { formatDate, type Post } from "@/lib/blog";
import { useTranslations } from "next-intl";

type Props = {
  post: Post;
  locale: string;
  featured?: boolean;
};

export default function PostCard({ post, locale, featured }: Props) {
  const t = useTranslations("blog");
  // Strip locale prefix from URL — i18n's Link adds it
  const href = `/blog/${post.slug}`;

  return (
    <article
      className={`group relative flex flex-col ${
        featured ? "lg:flex-row gap-6 lg:gap-8" : "gap-3"
      } p-6 lg:p-7 rounded-2xl bg-surface ring-1 ring-border-warm shadow-warm-sm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300`}
    >
      <div className={`flex-1 ${featured ? "lg:py-2" : ""}`}>
        <div className="flex items-center gap-3 text-xs">
          <span className="px-2.5 py-0.5 rounded-full bg-secondary-muted text-secondary font-semibold tracking-wider uppercase">
            {post.category}
          </span>
          <span className="text-text-tertiary inline-flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            {t("readingTime", { minutes: post.readingTime })}
          </span>
        </div>
        <h2
          className={`mt-4 ${
            featured ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
          } font-semibold tracking-tight text-text-primary leading-snug`}
        >
          <Link href={href} className="hover:text-primary transition-colors">
            <span className="absolute inset-0 z-10" aria-hidden />
            {post.title}
          </Link>
        </h2>
        <p
          className={`mt-3 ${
            featured ? "text-base lg:text-lg" : "text-[15px]"
          } text-text-secondary leading-relaxed`}
        >
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-text-tertiary">
          <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
        </div>
      </div>
    </article>
  );
}
