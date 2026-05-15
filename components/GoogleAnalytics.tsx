"use client";

import Script from "next/script";

const GA_ID = "G-8QW85EHH0Z";

/**
 * Google Analytics 4 with Consent Mode v2.
 *
 * Privacy-respecting setup:
 * - Default consent state is DENIED for analytics/ads storage.
 * - On mount we read the stored cookie-consent decision and call
 *   gtag('consent', 'update', ...) if the user previously accepted.
 * - CookieBanner.tsx dispatches a fresh 'consent' update when the user
 *   clicks Accept / Reject so tracking turns on/off without a reload.
 *
 * The gtag.js script itself is loaded on every page so that consent
 * updates take effect immediately when granted, but no measurement
 * events fire until consent is granted.
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });

          try {
            var stored = localStorage.getItem('docuvault-cookie-consent');
            if (stored) {
              var parsed = JSON.parse(stored);
              if (parsed && parsed.accept) {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted'
                });
              }
            }
          } catch (e) {}
        `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
