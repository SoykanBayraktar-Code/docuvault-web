import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DocuVault — Belge Kasası",
    short_name: "DocuVault",
    description:
      "Belgeleriniz güvende, saniyeler içinde bulun. AI destekli akıllı belge kasası.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F6F1",
    theme_color: "#4A5C3F",
    orientation: "portrait",
    lang: "tr",
    categories: ["productivity", "business", "utilities"],
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
