// Typed wrapper around window.gtag so call-sites stay readable and we have
// one place to gate on consent / extend later.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

function send(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, params);
}

export const track = {
  appStoreClick(location: string) {
    send("app_store_click", { location, outbound: true });
  },
  changeLanguage(from: string, to: string) {
    send("change_language", { from, to });
  },
  togglePricingBilling(billing: "monthly" | "yearly") {
    send("toggle_pricing_billing", { billing });
  },
  expandFaq(question: string, index: number) {
    send("expand_faq", { question: question.slice(0, 100), index });
  },
  viewSection(section: string) {
    send("view_section", { section });
  },
};
